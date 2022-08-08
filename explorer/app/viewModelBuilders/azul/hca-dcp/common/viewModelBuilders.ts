import { FilesResponse } from "../../../../apis/azul/hca-dcp/common/entities";
import * as C from "../../../../components";

import {
  filesToCellCount,
  filesToContentDesc,
  filesToFileFormat,
  filesToFileName,
  filesToFileSize,
  filesToProjTitle,
} from "../../../../apis/azul/hca-dcp/common/transformers";

/* eslint-disable sonarjs/no-duplicate-string -- ignoring duplicate strings here*/
export const buildFileName = (
  file: FilesResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.files?.[0]) {
    return {};
  }

  return {
    children: filesToFileName(file),
    customColor: "ink",
    variant: "text-body-400",
  };
};

export const buildFileFormat = (
  file: FilesResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.files?.[0]) {
    return {};
  }

  return {
    children: filesToFileFormat(file),
    customColor: "ink",
    variant: "text-body-400",
  };
};

export const buildProjTitle = (
  file: FilesResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.projects?.[0]) {
    return {};
  }

  return {
    children: filesToProjTitle(file),
    customColor: "ink",
    variant: "text-body-400",
  };
};

export const buildFileSize = (
  file: FilesResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.files?.[0]) {
    return {};
  }

  return {
    children: filesToFileSize(file),
    customColor: "ink",
    variant: "text-body-400",
  };
};

export const buildContentDesc = (
  file: FilesResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.files?.[0]) {
    return {};
  }

  return {
    children: filesToContentDesc(file),
    customColor: "ink",
    variant: "text-body-400",
  };
};
export const buildCellCount = (
  file: FilesResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.projects?.[0].estimatedCellCount) {
    return {
      children: 0,
      customColor: "ink",
      variant: "text-body-400",
    };
  }

  return {
    children: filesToCellCount(file),
    customColor: "ink",
    variant: "text-body-400",
  };
};
/* eslint-enable sonarjs/no-duplicate-string -- ignoring duplicate strings here*/
