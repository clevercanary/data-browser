import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import { Theme as MuiTheme } from "@mui/material/styles";
import { CustomColors } from "./theme";

declare module "@mui/material/styles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Palette extends CustomColors {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteOptions extends CustomColors {}

  interface TypographyVariants {
    textBody500: TypographyStyleOptions;
    textBody400: TypographyStyleOptions;
    textBody4002Lines: TypographyStyleOptions;
    textHeadingSmall: TypographyStyleOptions;
  }
  interface TypographyVariantsOptions {
    textBody500: TypographyStyleOptions;
    textBody400: TypographyStyleOptions;
    textBody4002Lines: TypographyStyleOptions;
    textHeadingSmall: TypographyStyleOptions;
  }
  interface TypographyPropsVariantOverrides {
    textBody500: true;
    textBody400: true;
    textBody4002Lines: true;
    textHeadingSmall: true;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    textBody500: true;
    textBody400: true;
    textBody4002Lines: true;
    textHeadingSmall: true;
  }
}

declare module "@emotion/react" {
  export interface Theme extends MuiTheme {
    name: "EmotionTheme";
  }
}
