import { DetailResponseType, ListResponseType } from "app/models/responses";
import { DetailModel, ListViewModel } from "app/models/viewModels";
import { HeaderProps } from "../components/Header/header";
import { JSXElementConstructor } from "react";

type ListTransformerFunction<T extends ListResponseType> = (
  response: T
) => ListViewModel;

type DetailTransformerFunction<T extends DetailResponseType> = (
  response: T
) => DetailModel;

type GetIdFunction<T extends DetailResponseType> = (detail: T) => string;

export interface EntityConfig<
  L extends ListResponseType = any,
  D extends DetailResponseType = any
> {
  label: string;
  route: string;
  apiPath: string;
  listTransformer: ListTransformerFunction<L>;
  detailTransformer: DetailTransformerFunction<D>;
  getId?: GetIdFunction<D>;
  staticLoad?: boolean;
}

export interface ComponentObject<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = any,
  D = any
> {
  component: React.FC<any>;
  props?: React.ComponentProps<T>;
  children?: ComponentObject[];
  transformer?: (model: D) => React.ComponentProps<T>;
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
  detail?: {
    mainColumn: ComponentObject[];
    sideColumn: ComponentObject[];
  };
}
