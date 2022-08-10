// Core dependencies
import { CssBaseline } from "@mui/material";
import { ThemeProvider as Emotion10ThemeProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";

// App dependencies
import { config } from "app/config/config";
import { ConfigProvider } from "app/components/Config/Config";
import { Footer } from "app/components/Layout/components/Footer/footer";
import { getAppTheme } from "app/theme/theme";
import { Head } from "app/components/Head/head";
import { Header } from "app/components/Layout/components/Header/header";

// Styles
import { AppLayout } from "app/components/Layout/components/AppLayout/appLayout.styles";
import { Main } from "app/components/Layout/components/Main/main.styles";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const currentConfig = config();
  const currentLayout = currentConfig.layout;
  const theme = getAppTheme(currentConfig.theme);
  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ConfigProvider value={currentConfig}>
          <Head />
          <CssBaseline />
          <AppLayout>
            <Header header={currentLayout.header} />
            <Main>
              <Component {...pageProps} />
            </Main>
            <Footer footer={currentLayout.footer} />
          </AppLayout>
        </ConfigProvider>
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
}

export default MyApp;
