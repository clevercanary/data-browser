import { concatStrings } from "app/utils/string";
import { AnvilFileResponse } from "app/models/responses";
import * as C from "../../../app/components";

/* eslint-disable sonarjs/no-duplicate-string -- ignoring duplicate strings here */
export const filesToDatasetNameColumn = (
  file: AnvilFileResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.files) {
    return {};
  }

  return {
    children: file.datasets[0].dataset_name,
    customColor: "ink",
    variant: "text-body-400",
  };
};

export const filesToFileFormatColumn = (
  file: AnvilFileResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.files) {
    return {};
  }

  return {
    children: file.files[0].file_format,
    customColor: "ink",
    variant: "text-body-400",
  };
};

export const filesToFileIdColumn = (
  file: AnvilFileResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.files) {
    return {};
  }

  return {
    children: file.files[0].file_id,
    customColor: "ink",
    variant: "text-body-400",
  };
};

export const filesToFileTypeColumn = (
  file: AnvilFileResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.files) {
    return {};
  }

  return {
    children: file.files[0].file_type,
    customColor: "ink",
    variant: "text-body-400",
  };
};

export const filesToDataModalityColumn = (
  file: AnvilFileResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.files?.[0]) {
    return {};
  }

  return {
    children: concatStrings(file.files[0].data_modality),
    customColor: "ink",
    variant: "text-body-400",
  };
};
/* eslint-enable sonarjs/no-duplicate-string -- watching for duplicate strings */