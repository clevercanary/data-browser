import { DetailResponseType } from "./responses";

//Project
export interface DetailModel {
  json?: string;
  detailName?: string;
  data?: DetailResponseType;
}

export interface ItemViewModel {
  uuid: string;
  name: string;
}

export interface ListViewModel {
  items: ItemViewModel[];
}
