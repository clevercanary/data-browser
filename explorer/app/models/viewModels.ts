//Project
export interface ProjectViewModel {
  json: string;
  projectName: string;
}

export interface ItemViewModel {
  uuid: string;
  projectName: string;
}

export interface ListViewModel {
  items: ItemViewModel[];
}
