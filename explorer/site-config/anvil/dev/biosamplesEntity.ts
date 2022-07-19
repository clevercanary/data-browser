// App dependencies
import * as C from "../../../app/components";
import {
  ComponentConfig,
  EntityConfig,
  ListConfig,
} from "../../../app/config/model";
import { BiosamplesResponse } from "app/models/responses";
import * as T from "./biosamplesViewModelBuilder";

/**
 * Entity config object responsible to config anything related to the /explore/biosamples route.
 */
export const biosamplesEntity: EntityConfig<BiosamplesResponse> = {
  apiPath: "index/biosamples",
  detail: {
    tabs: [],
    top: [],
  },
  label: "BioSamples",
  list: {
    columns: [
      {
        componentConfig: {
          component: C.Cell,
          transformer: T.buildBiosampleId,
        } as ComponentConfig<typeof C.Cell>,
        header: "Biosample Id",
        sort: {
          default: true,
          sortKey: "biosample_id",
        },
        width: { max: "1fr", min: "200px" },
      },
      {
        componentConfig: {
          component: C.Cell,
          transformer: T.buildBiosampleType,
        } as ComponentConfig<typeof C.Cell>,
        header: "Biosample Type",
        sort: {
          sortKey: "biosample_type",
        },
        width: { max: "1fr", min: "200px" },
      },
      {
        componentConfig: {
          component: C.NTagCell,
          transformer: T.buildOrganismType,
        } as ComponentConfig<typeof C.NTagCell>,
        header: "Organism Type",
        sort: {
          sortKey: "organism_type",
        },
        width: { max: "1fr", min: "200px" },
      },
      {
        componentConfig: {
          component: C.NTagCell,
          transformer: T.buildPhenotypicSex,
        } as ComponentConfig<typeof C.NTagCell>,
        header: "Phenotypic Sex",
        sort: {
          sortKey: "phenotypic_sex",
        },
        width: { max: "1fr", min: "200px" },
      },
      {
        componentConfig: {
          component: C.Cell,
          transformer: T.buildAnatomicalSite,
        } as ComponentConfig<typeof C.Cell>,
        header: "Anatomical Site",
        sort: {
          sortKey: "anatomical_site",
        },
        width: { max: "1fr", min: "200px" },
      },
      {
        componentConfig: {
          component: C.NTagCell,
          transformer: T.buildDatasetName,
        } as ComponentConfig<typeof C.NTagCell>,
        header: "Dataset Name",
        sort: {
          sortKey: "title",
        },
        width: { max: "1fr", min: "200px" },
      },
    ],
  } as ListConfig<BiosamplesResponse>,
  route: "biosamples",
};