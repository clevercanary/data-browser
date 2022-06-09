import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider as Emotion10ThemeProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "app/theme";
import { ConfigProvider } from "app/components/Config/Config";
import { config } from "app/config/config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ConfigProvider value={config()}>
          <Component {...pageProps} />
        </ConfigProvider>
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
}

export default MyApp;
