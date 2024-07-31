import { bp } from "./breakpoints";

export const basePath = import.meta.env.VITE_BASE_PATH || "";

export const appMaxWidth = "700px";
export const mainContainer = `
  width: 100%;
  max-width: ${appMaxWidth};
  padding: 0 var(--space-4);

  ${bp.sm(`
    padding-left: 0;
    padding-right: 0;
  `)}
`;
