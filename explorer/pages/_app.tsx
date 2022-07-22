// Core dependencies
import { theme } from "app/theme";
import { ThemeProvider as Emotion10ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ConfigProvider } from "app/components/Config/Config";
import { config } from "app/config/config";
import type { AppProps } from "next/app";
import { Footer } from "app/components/Layout/components/Footer/footer";
import { Header } from "app/components/Layout/components/Header/header";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const currenctConfig = config();
  const currentLayout = currenctConfig.layout;
  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ConfigProvider value={currenctConfig}>
          <CssBaseline />
          <Header header={currentLayout.header} />
          <Component {...pageProps} />
          <Footer footer={currentLayout.footer} />
        </ConfigProvider>
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
}

export default MyApp;
