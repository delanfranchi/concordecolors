import { css, unsafeCSS } from "lit";

import tailwindImport from "./tailwind.css?inline";

export const tailwind = css`
  ${unsafeCSS(tailwindImport)}
`;
