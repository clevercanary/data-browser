import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: "Inter",
    textBody500: {
      fontFamily: "Inter",
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 500,
    },
    textBody400: {
      fontFamily: "Inter",
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 400,
    },
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
