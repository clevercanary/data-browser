import "@clevercanary/data-explorer-ui";
import { createAppTheme } from "@clevercanary/data-explorer-ui/lib/theme/theme";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ConfigProvider } from "app/components/Config/config";
import { Head } from "app/components/Head/head";
import { AppLayout } from "app/components/Layout/components/AppLayout/appLayout.styles";
import { Footer } from "app/components/Layout/components/Footer/footer";
import { Header } from "app/components/Layout/components/Header/header";
import { Main } from "app/components/Layout/components/Main/main.styles";
import { config } from "app/config/config";
import type { AppProps } from "next/app";
import { AzulEntitiesStaticResponse } from "../app/apis/azul/common/entities";
import { AuthProvider } from "../app/common/context/authState";
import { ExploreStateProvider } from "../app/common/context/exploreState";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // Set up the site configuration, layout and theme.
  const siteConfig = config();
  const layout = siteConfig.layout;
  const theme = createAppTheme(siteConfig.themeOptions);
  const { entityListType } = pageProps as AzulEntitiesStaticResponse;

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ConfigProvider value={siteConfig}>
          <Head />
          <CssBaseline />
          <AuthProvider>
            <AppLayout>
              <Header header={layout.header} />
              <ExploreStateProvider entityListType={entityListType}>
                <Main>
                  <Component {...pageProps} />
                </Main>
              </ExploreStateProvider>
              <Footer footer={layout.footer} />
            </AppLayout>
          </AuthProvider>
        </ConfigProvider>
      </ThemeProvider>
    </EmotionThemeProvider>
  );
}

export default MyApp;
