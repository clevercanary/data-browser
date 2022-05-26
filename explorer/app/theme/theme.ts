import { createTheme, Theme as MuiTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    colorInk: string;
    colorInkLight: string;
    colorSmokeDark: string;
    colorSmoke: string;
    colorSmokeLight: string;
    colorSmokeLightest: string;
  }
  interface PaletteOptions {
    colorInk: string;
    colorInkLight: string;
    colorSmokeDark: string;
    colorSmoke: string;
    colorSmokeLight: string;
    colorSmokeLightest: string;
  }
}

declare module "@emotion/react" {
  export interface Theme extends MuiTheme {
    name: "EmotionTheme";
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    body1: {
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: 0.15,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: 0.17,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: "28px",
      letterSpacing: 0.15,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: "22px",
      letterSpacing: 0.1,
      fontWeight: 500,
    },
    caption: {
      fontSize: 12,
      lineHeight: "20px",
      letterSpacing: 0.4,
      fontWeight: 400,
    },
    overline: {
      fontSize: 12,
      lineHeight: "32px",
      letterSpacing: 1,
      fontWeight: 400,
    },
    h1: {
      fontSize: 96,
      lineHeight: "112px",
      letterSpacing: -1.5,
      fontWeight: 300,
    },
    h2: {
      fontSize: 60,
      lineHeight: "72px",
      letterSpacing: -0.5,
      fontWeight: 300,
    },
    h3: {
      fontSize: 48,
      lineHeight: "56px",
      fontWeight: 400,
    },
    h4: {
      fontSize: 34,
      lineHeight: "42px",
      letterSpacing: 0.25,
      fontWeight: 400,
    },
    h5: {
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 400,
    },
    h6: {
      fontSize: 20,
      lineHeight: "32px",
      letterSpacing: 0.15,
      fontWeight: 500,
    },
  },
  palette: {
    colorInk: "#212B36",
    colorInkLight: "#637381",
    colorSmokeDark: "#C4CDD5",
    colorSmoke: "#E1E3E5",
    colorSmokeLight: "#F6F6F7",
    colorSmokeLightest: "#FAFBFB",
  },
});
