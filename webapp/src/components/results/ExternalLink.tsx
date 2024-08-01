import { AnchorHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const ExternalLinkText = styled.span``;
const ExternalLinkAnchor = styled.a<{
  $underline?: boolean;
  $showVisited: boolean;
}>`
  color: inherit;
  text-decoration: none;

  &:hover ${ExternalLinkText} {
    text-decoration: underline;
  }

  ${({ $showVisited }) =>
    $showVisited &&
    `
    &:visited {
      color: #646cff;
    }
  `}

  ${ExternalLinkText} {
    text-decoration: ${({ $underline }) => ($underline ? "underline" : "none")};
  }

  &::after {
    content: "🡥";
    font-family: sans-serif;
    display: inline;
    margin-left: 4px;
    text-decoration: none;
  }
`;

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  underline?: boolean;
  showVisited?: boolean;
}

export const ExternalLink = ({
  children,
  underline,
  showVisited = false,
  ...props
}: ExternalLinkProps) => (
  <ExternalLinkAnchor
    rel="noopener"
    {...props}
    $underline={underline}
    $showVisited={showVisited}
  >
    <ExternalLinkText>{children}</ExternalLinkText>
  </ExternalLinkAnchor>
);

interface ScpWikiLinkProps extends ExternalLinkProps {
  link: string;
}

export const ScpWikiLink = ({ children, link, ...props }: ScpWikiLinkProps) => (
  <ExternalLink
    href={`https://scp-wiki.wikidot.com/${encodeURI(link)}`}
    title={`https://scp-wiki.wikidot.com/${encodeURI(link)}`}
    target="_blank"
    {...props}
  >
    {children}
  </ExternalLink>
);
