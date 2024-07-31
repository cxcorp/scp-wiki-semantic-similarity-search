import { AnchorHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const ExternalLinkText = styled.span``;
const ExternalLinkAnchor = styled.a<{ $underline?: boolean }>`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: #646cff;
  }

  ${ExternalLinkText} {
    text-decoration: ${({ $underline }) => ($underline ? "underline" : "none")};
  }

  &:hover ${ExternalLinkText} {
    text-decoration: underline;
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
}

export const ExternalLink = ({
  children,
  underline,
  ...props
}: ExternalLinkProps) => (
  <ExternalLinkAnchor {...props} $underline={underline}>
    <ExternalLinkText>{children}</ExternalLinkText>
  </ExternalLinkAnchor>
);
