const breakpoint =
  (minWidth: string) =>
  (css: string) => `@media screen and (min-width: ${minWidth}) {
  ${css}
}`;

export const bp = {
  sm: breakpoint("640px"),
  md: breakpoint("768px"),
  lg: breakpoint("1024px"),
  xl: breakpoint("1280px"),
  xxl: breakpoint("1536px"),
};
