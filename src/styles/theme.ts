import "styled-components";

declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}

const theme = {
  colors: {
    primaryBlue: "#0F52BA",
    bgColor: "#F9F9F9",
    shape: "#FFFFFF",
    primaryBlack: "#000000",
    secondaryBlack: "#373737",
		lightGray: "#BFBFBF",

  },
};

export { theme };
