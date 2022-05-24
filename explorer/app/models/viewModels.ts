//Project
export interface DetailViewModel {
  json?: string;
  detailName?: string;
}

export interface ItemViewModel {
  uuid: string;
  projectName: string;
}

export interface ListViewModel {
  items: ItemViewModel[];
}
