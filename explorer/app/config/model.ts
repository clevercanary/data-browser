import { ListResponseType, ListViewModel } from "app/models";
import { HeaderProps } from "../components/Header/Header";

export interface EntityConfig {
  label: string;
  route: string;
  apiPath: string;
  listTransformer: (response: ListResponseType) => ListViewModel;
  loadStaticallyList?: boolean;
  loadStaticallyDetail?: boolean;
}

export interface SiteConfig {
  redirectRootToPath?: string;
  datasources: {
    catalog: string;
    url: string;
  };
  layout: {
    header: HeaderProps;
  };
  entities: EntityConfig[];
}
