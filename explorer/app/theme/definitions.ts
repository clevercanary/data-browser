import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import { Theme as MuiTheme } from "@mui/material/styles";

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
  interface TypographyVariants {
    textBody500: TypographyStyleOptions;
    textBody400: TypographyStyleOptions;
  }
  interface TypographyVariantsOptions {
    textBody500: TypographyStyleOptions;
    textBody400: TypographyStyleOptions;
  }
  interface TypographyPropsVariantOverrides {
    textBody500: true;
    textBody400: true;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    textBody500: true;
    textBody400: true;
  }
}

declare module "@emotion/react" {
  export interface Theme extends MuiTheme {
    name: "EmotionTheme";
  }
}
