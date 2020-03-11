import { css } from "styled-components";

export const theme = {
  colors: {
    text: "#333",
    bg: "white",
    primary: "#ebebeb",
    secondary: "#4d3ae2",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

export const NarrowScreenWidth = "40em";

export const forNarrowScreen = (first, ...interpolations) => css`
  @media only screen ${NarrowScreenWidth != null &&
      css` and (max-width: ${NarrowScreenWidth})`} {
    ${css(first, ...interpolations)}
  }
`;

export const forWideScreen = (first, ...interpolations) => css`
  @media only screen ${NarrowScreenWidth != null &&
      css` and (min-width: ${NarrowScreenWidth})`} {
    ${css(first, ...interpolations)}
  }
`;

export const sidebarWidth = 200;
