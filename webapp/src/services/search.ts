import { distance } from "fastest-levenshtein";

const SPACE_OR_PUNCTUATION = () => /[\n\r\p{Z}\p{P}]+/gu;
const IS_SCP_LINK = /^scp-([\w\d-]+)$/;

declare const tags: unique symbol;

type Tagged<BaseType, Tag extends PropertyKey> = BaseType & {
  [tags]: { [K in Tag]: void };
};

type SearchNormalizedString = Tagged<string, "SearchNormalizedString">;

export const normalizePunctuation = (str: string): SearchNormalizedString =>
  str.replaceAll(
    SPACE_OR_PUNCTUATION(),
    " ",
  ) as unknown as SearchNormalizedString;

interface SearchResult {
  score: number;
  index: number;
}

export const createScpMatcher = (
  corpus: string[],
  { topNPerMethod }: { topNPerMethod: number },
) => {
  const normalizedCorpus = corpus.map((link) => normalizePunctuation(link));
  const suffixToCorpusIndex: Record<SearchNormalizedString, number> =
    Object.create(null);

  for (let i = 0; i < corpus.length; i++) {
    const link = corpus[i];
    const match = IS_SCP_LINK.exec(link)?.[1];

    if (!match) {
      continue;
    }

    suffixToCorpusIndex[normalizePunctuation(match)] = i;
  }

  /**
   * Matches a search term exactly to the suffix of an "scp-" string.
   * For example, "507" returns "scp-507" and "507-ex-j" matches "scp-507-ex-j".
   * Assumes `searchTerm` has been normalized.
   * @returns index of matched corpus item, or undefined if no match
   */
  const exactScpMatch = (searchTerm: SearchNormalizedString) => {
    return suffixToCorpusIndex[searchTerm] ?? undefined;
  };

  const stripScpPrefix = (str: string) => {
    const match = IS_SCP_LINK.exec(str)?.[1];
    return match ?? str;
  };

  const scpSuffixExactMatch = (searchTerm: string) => {
    searchTerm = stripScpPrefix(searchTerm);

    const exactMatch = exactScpMatch(normalizePunctuation(searchTerm));
    if (exactMatch !== undefined) {
      return [{ score: 0, index: exactMatch }];
    }

    return [];
  };

  const scpSuffixStartsWithMatch = (searchTerm: string) => {
    searchTerm = stripScpPrefix(searchTerm);
    searchTerm = normalizePunctuation(searchTerm);

    const results: SearchResult[] = [];
    for (const [key, value] of Object.entries(suffixToCorpusIndex)) {
      if (key.startsWith(searchTerm)) {
        results.push({
          score: 2 ** (distance(searchTerm, key) / 10),
          index: value,
        });
      }
    }

    return results.sort((a, b) => a.score - b.score).slice(0, topNPerMethod);
  };

  const startsWithMatch = (searchTerm: string) => {
    searchTerm = normalizePunctuation(searchTerm);

    const results: SearchResult[] = [];
    for (let i = 0; i < normalizedCorpus.length; i++) {
      const link = normalizedCorpus[i];
      if (link.startsWith(searchTerm)) {
        results.push({
          score: 2 ** (distance(searchTerm, link) / 10),
          index: i,
        });
      }
    }

    return results.sort((a, b) => a.score - b.score).slice(0, topNPerMethod);
  };

  const exactMatch = (searchTerm: string) => {
    searchTerm = normalizePunctuation(searchTerm);

    for (let i = 0; i < normalizedCorpus.length; i++) {
      const link = normalizedCorpus[i];
      if (link === searchTerm) {
        return [{ score: 0, index: i }];
      }
    }

    return [];
  };

  const containsMatch = (searchTerm: string) => {
    searchTerm = normalizePunctuation(searchTerm);

    const results: SearchResult[] = [];
    for (let i = 0; i < normalizedCorpus.length; i++) {
      const link = normalizedCorpus[i];
      if (link.includes(searchTerm)) {
        results.push({
          score: 2 ** (distance(searchTerm, link) / 10),
          index: i,
        });
      }
    }

    return results.sort((a, b) => a.score - b.score).slice(0, topNPerMethod);
  };

  type Matcher = (str: string) => SearchResult[];

  const matchShort: Matcher[] = [
    scpSuffixExactMatch,
    exactMatch,
    scpSuffixStartsWithMatch,
    startsWithMatch,
  ];

  const matchLong: Matcher[] = [
    scpSuffixExactMatch,
    exactMatch,
    scpSuffixStartsWithMatch,
    startsWithMatch,
    containsMatch,
  ];

  const matchAll = (searchTerm: string): SearchResult[] => {
    const matchers = searchTerm.length > 2 ? matchLong : matchShort;
    const allMatches = matchers.reduce<SearchResult[]>(
      (acc, matcher) => acc.concat(matcher(searchTerm)),
      [],
    );

    // Deduplicate matches, preserving the first
    const results: SearchResult[] = [];
    const seenIndices = new Set<number>();
    for (const match of allMatches) {
      if (seenIndices.has(match.index)) {
        continue;
      }

      results.push(match);
      seenIndices.add(match.index);
    }

    return results;
  };

  return {
    matchAll,
  };
};
