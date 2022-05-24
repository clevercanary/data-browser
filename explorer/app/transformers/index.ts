import {
  ProjectListResponse,
  ListViewModel,
  ProjectResponse,
  ProjectViewModel,
} from "../models";
import { detailToView, hcaListToView } from "./project";

interface TransformerConfig {
  project: {
    detail: (value: ProjectResponse) => ProjectViewModel;
    list: (value: ProjectListResponse) => ListViewModel;
  };
}

export const TRANSFORMERS: TransformerConfig = {
  project: {
    detail: detailToView,
    list: hcaListToView,
  },
};
