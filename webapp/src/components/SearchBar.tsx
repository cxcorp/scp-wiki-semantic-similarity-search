import { ComponentRef, RefObject, useCallback, useMemo, useRef } from "react";
import {
  ActionMeta,
  ControlProps,
  components as selectComponents,
  SingleValue,
} from "react-select";
import AsyncSelect from "react-select/async";
import { styled } from "styled-components";
import { useAppContext } from "../context/useAppContext";
import { createScpMatcher } from "../services/search";
import SearchIcon from "./SearchIcon";

const SearchBarIcon = styled(SearchIcon)`
  flex: 0 0 auto;
  margin-left: 10px;
  width: 16px;
  height: 16px;
`;

interface SearchOption {
  value: string;
  label: string;
}

const SearchIconControl = ({
  children,
  ...props
}: ControlProps<SearchOption, false>) => (
  <selectComponents.Control {...props}>
    <SearchBarIcon />
    {children}
  </selectComponents.Control>
);

const SelectComponents = {
  Control: SearchIconControl,
};

const useItemSearch = () => {
  const { corpus } = useAppContext();

  return useMemo(() => {
    const corpusOptions = corpus.map<SearchOption>((item) => ({
      value: item,
      label: item,
    }));
    const matcher = createScpMatcher(corpus, { maxResults: 25 });

    // this is async without need for a purpose - so that it works with react-select's fetcher thing
    return {
      searchCorpus: async (searchTerm: string): Promise<SearchOption[]> => {
        searchTerm = searchTerm.trim().toLowerCase();

        if (searchTerm.length === 0) {
          return [];
        }

        return matcher
          .matchAll(searchTerm)
          .map(({ index }) => corpusOptions[index]);
      },
    };
  }, [corpus]);
};

const SuggestionButton = styled.button`
  color: #2684ff;
  background: #1a1a1a;
  border-radius: 0;
  padding: 3px;
  display: inline-block;
  border: unset;
  margin: unset;
`;

const useNoOptionsMessage = (
  ref: RefObject<ComponentRef<typeof StyledAsyncSelect>>,
) => {
  const corpus = useAppContext(({ corpus }) => corpus);

  return useMemo(
    () =>
      ({ inputValue }: { inputValue: string }) => {
        const len = inputValue.trim().length;
        const randomSuggestion =
          corpus[Math.floor(Math.random() * corpus.length)];

        switch (len) {
          case 2:
            return `Type one more letter to search...`;
          case 1:
            return `Type two more letters to search...`;
          case 0:
            return (
              <>
                Start typing to search, or try{" "}
                <SuggestionButton
                  onClick={() => {
                    ref.current?.setValue(
                      {
                        label: randomSuggestion,
                        value: randomSuggestion,
                      },
                      "select-option",
                    );
                    ref.current?.blur();
                  }}
                >
                  {randomSuggestion}
                </SuggestionButton>
              </>
            );
          default:
            return `No items found`;
        }
      },
    [ref, corpus],
  );
};

const StyledAsyncSelect = styled(AsyncSelect<SearchOption>)`
  --text-color: rgba(var(--color-text-rgb) / 0.25);
  --border-radius: 0.5rem;

  .react-select__control {
    border-radius: var(--border-radius);
    border: 1px solid var(--text-color);
    background: rgba(39, 39, 42, 50%);
    color: var(--text-color);
  }

  .react-select__control:hover {
    border-color: rgba(var(--color-text-rgb) / 0.55);
  }

  .react-select__control.react-select__control--is-focused {
    border-color: #2684ff;
  }

  .react-select__control:hover:not(.react-select__control--is-focused)
    .react-select__indicator-separator {
    background-color: #b3b3b3;
  }

  .react-select__indicator-separator {
    background-color: var(--text-color);
  }

  .react-select__control--menu-is-open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-select__single-value {
    color: rgba(var(--color-text-rgb) / 0.67);
  }

  .react-select__input-container {
    color: rgba(var(--color-text-rgb) / 0.67);
  }

  .react-select__menu {
    background: #212122;
    border: 1px solid var(--text-color);
    border-top-width: 0;

    border-radius: var(--border-radius);
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    margin-top: 1px;
  }

  .react-select__option {
    padding: 5px 38px;
  }

  .react-select__option--is-focused:not(.react-select__option--is-selected) {
    background: #313234;
    outline: 1px solid rgba(255, 255, 255, 0.2);
  }

  .react-select__option--is-focused:active:not(
      .react-select__option--is-selected
    ) {
    background: #404247;
    outline: 1px solid rgba(255, 255, 255, 0.2);
  }

  .react-select__indicator {
    color: var(--text-color);
  }

  .react-select__control--is-focused .react-select__indicator {
    color: #777;
  }

  .react-select__control--is-focused .react-select__indicator:hover {
    color: #ccc;
  }
`;

const SearchBar = ({ className }: { className?: string }) => {
  const setSelectedLink = useAppContext((s) => s.setSelectedLink);
  const { searchCorpus } = useItemSearch();

  const onChange = useCallback(
    (
      newValue: SingleValue<SearchOption>,
      { action }: ActionMeta<SearchOption>,
    ) => {
      if (action !== "select-option" || !newValue) {
        return;
      }

      setSelectedLink(newValue.value);
    },
    [setSelectedLink],
  );

  const selectRef = useRef<ComponentRef<typeof StyledAsyncSelect>>(null);

  return (
    <StyledAsyncSelect
      ref={selectRef}
      className={className}
      classNamePrefix="react-select"
      noOptionsMessage={useNoOptionsMessage(selectRef)}
      components={SelectComponents}
      loadOptions={searchCorpus}
      placeholder="Search for an SCP, tale or GOI..."
      onChange={onChange}
      isSearchable
      blurInputOnSelect
    />
  );
};

export default SearchBar;
