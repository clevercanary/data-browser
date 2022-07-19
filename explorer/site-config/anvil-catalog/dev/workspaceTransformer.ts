import * as C from "../../../app/components";

import { AnvilCatalogSourceItem } from "app/models/responses";

const createColumn = (
  value: string | number = ""
): React.ComponentProps<typeof C.Text> => ({
  children: value,
  customColor: "ink",
  variant: "text-body-400",
});

export const workspaceToConsortiumColumn = (
  source: AnvilCatalogSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(source?.Consortium);

export const workspaceToStudyColumn = (
  source: AnvilCatalogSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(source?.["Study"]);

export const workspaceToDbGapColumn = (
  source: AnvilCatalogSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(source?.["dbGap Id"]);

export const workspaceToConsentCodeColumn = (
  source: AnvilCatalogSourceItem
): React.ComponentProps<typeof C.Text> =>
  createColumn(source?.["Consent Code"]);

export const workspaceToTerraWorkspaceColumn = (
  source: AnvilCatalogSourceItem
): React.ComponentProps<typeof C.Text> =>
  createColumn(source["Terra Workspace Name"]);

export const workspaceToDiseaseColumn = (
  source: AnvilCatalogSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(source?.Disease);

export const workspaceToAccessColumn = (
  source: AnvilCatalogSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(source?.Access);

export const workspaceToStudyDesignColumn = (
  source: AnvilCatalogSourceItem
): React.ComponentProps<typeof C.Text> =>
  createColumn(source?.["Study Design"]);

export const workspaceToDataTypeColumn = (
  source: AnvilCatalogSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(source?.["Data Type"]);

export const workspaceToParticipantsColumn = (
  source: AnvilCatalogSourceItem
): React.ComponentProps<typeof C.Text> => createColumn(source?.Participants);
