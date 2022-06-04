import { ShowMore } from "./ShowMore/ShowMore";
import { Contacts } from "./Contacts/Contacts";
import { Citations } from "./Citations/Citations";

export { ShowMore } from "./ShowMore/ShowMore";
export { Contacts } from "./Contacts/Contacts";
export { Citations } from "./Citations/Citations";

// export type Component = typeof ShowMore | typeof Contacts;

export const MAP = {
  showMore: ShowMore,
  contacts: Contacts,
  citations: Citations,
};
