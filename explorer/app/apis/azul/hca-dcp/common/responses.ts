import { AzulHit } from "../../common/entities";
import { FilesEntityResponse } from "./entities";
import { AggregateProjectResponse } from "./aggregatedEntities";

export type FilesResponse = AzulHit &
  FilesEntityResponse &
  AggregateProjectResponse;
