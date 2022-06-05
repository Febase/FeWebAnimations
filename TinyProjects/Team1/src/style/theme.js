import { createStitches } from "@stitches/react";

export const { styled, globalCss, css } = createStitches({
  theme: {
    colors: {
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
      dark: "#1C212E",
      white: "#fff",
      greyLight: "#cdd9ed",
      greyDark: "#3F4656",
      grey: "#6C7486",
      primaryLight: "#7699FF",
      primary: "#275EFE",
      sandLight: "#EDD9A9",
      sand: "#DCB773",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "150px",
    },
  },
});
