import { useLayoutEffect } from "react";
import styled, { CSSProperties } from "styled-components";
import { Table } from "../table";
import { ScpWikiLink } from "./ExternalLink";
import {
  ActionsColumnCell,
  colorMap,
  PageColumnCell,
  ResultSearchButton,
  ResultSearchIcon,
  SimilarityColumnCell,
  SimilarityValue,
} from "./ResultsComponents";
import { ScrollWrapper, useScrollWrapper } from "./ScrollWrapper";
import { HubResultItem } from "./useHubsResults";

interface HubTableProps {
  className?: string;
  hub: HubResultItem;
  onItemShowClicked: (itemLink: string) => void;
}

const HubTableWrapper = styled.div``;

const HubTitleLink = styled(ScpWikiLink)`
  display: block;
  margin-bottom: var(--space-2);
`;

const HubTable = ({
  className,
  hub: { link: hubLink, title: hubTitle, items },
  onItemShowClicked,
}: HubTableProps) => {
  const { resetScrollPosition, scrollWrapperProps } = useScrollWrapper();

  useLayoutEffect(() => {
    resetScrollPosition();
  }, [resetScrollPosition, items]);

  return (
    <HubTableWrapper className={className}>
      <HubTitleLink showVisited={false} link={hubLink}>
        Hub: {hubTitle}
      </HubTitleLink>

      <ScrollWrapper {...scrollWrapperProps} key={hubLink}>
        <Table>
          <thead>
            <tr>
              <SimilarityColumnCell as="th">Similarity</SimilarityColumnCell>
              <th colSpan={2}>Page</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const { link, similarity } = item;
              return (
                <tr key={`hub:${hubLink},item:${link}`}>
                  <SimilarityColumnCell>
                    <SimilarityValue
                      style={
                        {
                          "--similarity-color": colorMap.color(
                            similarity,
                            0,
                            1,
                          ),
                        } as CSSProperties
                      }
                    >
                      {(similarity * 100).toFixed(2)}
                    </SimilarityValue>
                  </SimilarityColumnCell>
                  <PageColumnCell>
                    <ScpWikiLink link={link}>{link}</ScpWikiLink>
                  </PageColumnCell>
                  <ActionsColumnCell>
                    <ResultSearchButton
                      onClick={() => onItemShowClicked(link)}
                      title={`Show recommendations for ${link}`}
                    >
                      <ResultSearchIcon />
                      <span style={{ fontSize: "12px" }}>Show</span>
                    </ResultSearchButton>
                  </ActionsColumnCell>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </ScrollWrapper>
    </HubTableWrapper>
  );
};

const Container = styled(ScrollWrapper)`
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;

  padding: var(--space-4);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  /* background-color: #26282e; */
`;

const StyledHubTable = styled(HubTable)`
  &:not(:last-child) {
    margin-bottom: var(--space-5);
    padding-bottom: var(--space-4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

interface ResultHubsTableProps {
  className?: string;
  hubs: HubResultItem[];
  onItemShowClicked: (itemLink: string) => void;
}

export const ResultHubsTables = ({
  className,
  hubs,
  onItemShowClicked,
}: ResultHubsTableProps) => {
  const { resetScrollPosition, scrollWrapperProps } = useScrollWrapper();

  useLayoutEffect(() => {
    resetScrollPosition();
  }, [resetScrollPosition, hubs]);

  return (
    <Container {...scrollWrapperProps} className={className}>
      {hubs.map((hub) => (
        <StyledHubTable
          key={hub.link}
          hub={hub}
          onItemShowClicked={onItemShowClicked}
        />
      ))}
    </Container>
  );
};
