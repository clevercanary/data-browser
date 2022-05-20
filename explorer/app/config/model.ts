import { HeaderProps } from "../components/Header/Header";

export interface SiteConfig {
  datasources: {
    catalog: string;
    url: string;
  };
  layout: {
    header: HeaderProps;
  };
}
