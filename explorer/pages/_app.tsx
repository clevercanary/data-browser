import "@clevercanary/data-explorer-ui";
import { AppLayout } from "@clevercanary/data-explorer-ui/lib/components/Layout/components/AppLayout/appLayout.styles";
import { Footer } from "@clevercanary/data-explorer-ui/lib/components/Layout/components/Footer/footer";
import { Main } from "@clevercanary/data-explorer-ui/lib/components/Layout/components/Main/main.styles";
import { ConfigProvider as DXConfigProvider } from "@clevercanary/data-explorer-ui/lib/providers/config";
import { createAppTheme } from "@clevercanary/data-explorer-ui/lib/theme/theme";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Head } from "app/components/Head/head";
import { Header } from "app/components/Layout/components/Header/header";
import { config } from "app/config/config";
import type { AppProps } from "next/app";
import { AzulEntitiesStaticResponse } from "../app/apis/azul/common/entities";
import { AuthProvider } from "../app/common/context/authentication";
import { ExploreStateProvider } from "../app/common/context/exploreState";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // Set up the site configuration, layout and theme.
  const siteConfig = config();
  const { layout, themeOptions } = siteConfig;
  const theme = createAppTheme(themeOptions);
  const { entityListType } = pageProps as AzulEntitiesStaticResponse;

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <DXConfigProvider config={siteConfig}>
          <Head />
          <CssBaseline />
          <AuthProvider>
            <AppLayout>
              <Header {...layout.header} />
              <ExploreStateProvider entityListType={entityListType}>
                <Main>
                  <Component {...pageProps} />
                </Main>
              </ExploreStateProvider>
              <Footer {...layout.footer} />
            </AppLayout>
          </AuthProvider>
        </DXConfigProvider>
      </ThemeProvider>
    </EmotionThemeProvider>
  );
}

export default MyApp;
