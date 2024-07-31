import { ComponentRef, RefObject, useCallback, useMemo, useRef } from "react";
import {
  ActionMeta,
  ControlProps,
  components as selectComponents,
  SingleValue,
} from "react-select";
import AsyncSelect from "react-select/async";
import { styled } from "styled-components";
import { useAppContext } from "../context/AppContext";

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

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
  const corpusOptions: SearchOption[] = useMemo(
    () => corpus.map((item) => ({ value: item, label: item })),
    [corpus],
  );

  const searchCorpus = useCallback(
    async (searchTerm: string): Promise<SearchOption[]> => {
      const trimmedFilter = searchTerm.trim();
      if (trimmedFilter.length < 3) {
        return [];
      }

      const shownList = corpusOptions.filter(({ label }) =>
        label.includes(trimmedFilter),
      );
      return shownList
        .sort((a, b) => a.label.localeCompare(b.label))
        .slice(0, 20);
    },
    [corpusOptions],
  );

  return {
    searchCorpus,
  };
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
        const len = inputValue.length;
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

  .react-select__control:hover .react-select__indicator-separator {
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

const SearchBar = () => {
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
