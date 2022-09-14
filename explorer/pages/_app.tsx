import { ThemeProvider as Emotion10ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ConfigProvider } from "app/components/Config/Config";
import { Head } from "app/components/Head/head";
import { AppLayout } from "app/components/Layout/components/AppLayout/appLayout.styles";
import { Footer } from "app/components/Layout/components/Footer/footer";
import { Header } from "app/components/Layout/components/Header/header";
import { Main } from "app/components/Layout/components/Main/main.styles";
import { config } from "app/config/config";
import { getAppTheme } from "app/theme/theme";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AuthProvider } from "../app/common/context/authState";
import { FilterStateProvider } from "../app/common/context/filterState";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // Extract entity list type form URL query params and pass down to components
  const router = useRouter();
  const { entityListType } = router.query;
  pageProps.entityListType = entityListType;
  const currentConfig = config();
  const currentLayout = currentConfig.layout;
  const theme = getAppTheme(currentConfig.theme);
  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ConfigProvider value={currentConfig}>
          <Head />
          <CssBaseline />
          <AuthProvider authConfig={currentConfig.authConfig}>
            <AppLayout>
              <Header header={currentLayout.header} />
              <FilterStateProvider>
                <Main>
                  <Component {...pageProps} />
                </Main>
              </FilterStateProvider>
              <Footer footer={currentLayout.footer} />
            </AppLayout>
          </AuthProvider>
        </ConfigProvider>
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
}

export default MyApp;
