import { createTheme } from "@mui/material/styles";

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

export const theme = createTheme({
  typography: {
    fontFamily: "Inter",
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
