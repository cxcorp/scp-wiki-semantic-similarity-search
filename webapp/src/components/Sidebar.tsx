import {
  ChangeEvent,
  ComponentType,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  FixedSizeList as _FixedSizeList,
  FixedSizeListProps,
} from "react-window";
import { CSSProperties, styled } from "styled-components";
import { useAppContext } from "../context/useAppContext";

const FixedSizeList = _FixedSizeList as ComponentType<FixedSizeListProps>;

const SidebarItem = styled.li`
  margin: 0;
  line-height: 40px;
  vertical-align: middle;
`;

interface SidebarListRowProps {
  index: number;
  style: CSSProperties;
  data: string[];
}

const SidebarButton = styled.button`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0 10px;
  overflow: hidden;

  border-radius: 0;
  background: none;
  font-weight: normal;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SidebarListRow = ({ index, style, data }: SidebarListRowProps) => {
  const setSelectedLink = useAppContext((c) => c.setSelectedLink);
  const value = data[index];

  const handleClick = useCallback(() => {
    setSelectedLink(value);
  }, [value, setSelectedLink]);

  return (
    <SidebarItem style={style}>
      <SidebarButton onClick={handleClick}>{value}</SidebarButton>
    </SidebarItem>
  );
};

const StyledFixedSizeList = styled(FixedSizeList)`
  list-style-type: none;
  padding: 0;
  margin: 0;

  ${SidebarItem}:not(:first-child) {
    //border-top: 1px solid gray;
    box-shadow: 0 -1px 0 0 gray;
  }
`;

const StyledSidebar = styled.aside`
  width: 300px;
  flex: 2 0 300px;

  @media only screen and (max-width: 576px) {
    width: 100%;
    height: 50vh;
    overflow-y: hidden;
    border-bottom: 1px solid #ccc;
  }
`;

const SearchInput = styled.input`
  font-size: 16px;
  padding: 5px 10px;
  width: 100%;
`;

const SearchWrapper = styled.div`
  padding-bottom: 1rem;
  padding-top: 1rem;
  display: flex;
  align-items: stretch;
`;

interface SidebarCorpusListProps {
  searchFilter: string;
}

const itemKey = (index: number, data: string[]) => data[index];

const SidebarCorpusList = ({ searchFilter }: SidebarCorpusListProps) => {
  const { corpus } = useAppContext();

  const filteredCorpus = useMemo(() => {
    const trimmedFilter = searchFilter.trim();
    const shownList =
      trimmedFilter.length >= 3
        ? corpus.filter((link) => link.includes(trimmedFilter))
        : corpus;
    return [...shownList].sort();
  }, [searchFilter, corpus]);

  return (
    <StyledFixedSizeList
      innerElementType="ul"
      height={720}
      width="100%"
      itemSize={40}
      itemCount={filteredCorpus.length}
      itemData={filteredCorpus}
      itemKey={itemKey}
      children={SidebarListRow}
    />
  );
};

export const SearchSidebar = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <StyledSidebar>
      <SearchWrapper>
        <SearchInput
          value={search}
          onChange={useCallback(
            (e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.currentTarget.value),
            [],
          )}
        />
        <button
          onClick={useCallback(() => {
            setSearch("");
          }, [])}
        >
          x
        </button>
      </SearchWrapper>
      <SidebarCorpusList searchFilter={search} />
    </StyledSidebar>
  );
};

export default SearchSidebar;
