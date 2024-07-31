import { basePath } from "../common/ui-constants";

export interface SimilarityItem {
  link: string;
  similarity: number;
}

export const extractSimilarityData = (
  buf: ArrayBuffer,
  corpus: string[],
  index: number,
) => {
  const items: SimilarityItem[] = [];

  const view = new DataView(buf);

  const itemLen = 2 + 4;
  const rowLen = 50 * itemLen;

  const offset = index * rowLen;

  for (let i = 0; i < 50; i++) {
    const corpusIndexOfThisItem = view.getUint16(offset + i * itemLen, true);
    if (corpusIndexOfThisItem < 0 || corpusIndexOfThisItem > corpus.length) {
      console.error({
        corpusIndexOfThisItem,
        index,
        buf,
        corpus,
      });
      throw new Error(`corpusIndexOfThisItem out of range`);
    }

    items.push({
      link: corpus[corpusIndexOfThisItem],
      similarity: view.getFloat32(offset + i * itemLen + 2, true),
    });
  }

  return items;
};

export const fetchSimilarityData = async (signal: AbortSignal) => {
  const corpusP = fetch(`${basePath}/corpus.txt`, { signal })
    .then((res) => res.text())
    .then((lines): string[] =>
      // this array MUST NOT be sorted!
      // the indices here correspond to the indices in matches.bin
      lines
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => !!l),
    );
  const bufP = fetch(`${basePath}/matches.bin`, { signal }).then((res) =>
    res.arrayBuffer(),
  );

  return Promise.all([corpusP, bufP]);
};
