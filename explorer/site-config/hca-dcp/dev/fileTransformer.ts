import { concatStrings } from "app/utils/string";
import { FileResponse } from "app/models/responses";
import * as C from "../../../app/components";
import { humanFileSize } from "app/utils/fileSize";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

export const filesToFileNameColumn = (
  file: FileResponse
): React.ComponentProps<typeof C.Links> => {
  if (!file.files?.[0]) {
    return {
      links: [],
    };
  }

  return {
    links: [
      {
        label: file.files[0].name,
        url: `/explore/files/${file.files[0].uuid}`,
      },
    ],
  };
};

export const filesToFileFormatColumn = (
  file: FileResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.files?.[0]) {
    return {};
  }

  return {
    children: file.files[0].format,
    variant: "text-body-400",
    customColor: "ink",
  };
};

export const filesToProjTitleColumn = (
  file: FileResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.projects?.[0]) {
    return {};
  }

  return {
    children: concatStrings(file.projects[0].projectTitle),
    variant: "text-body-400",
    customColor: "ink",
  };
};

export const filesToFileSizeColumn = (
  file: FileResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.files?.[0]) {
    return {};
  }

  return {
    children: humanFileSize(file.files[0].size),
    variant: "text-body-400",
    customColor: "ink",
  };
};

export const filesToContentDescColumn = (
  file: FileResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.files?.[0]) {
    return {};
  }

  return {
    children: concatStrings(file.files[0].contentDescription),
    variant: "text-body-400",
    customColor: "ink",
  };
};

export const filesToCellCountColumn = (
  file: FileResponse
): React.ComponentProps<typeof C.Text> => {
  if (!file.projects?.[0].estimatedCellCount) {
    return {
      children: 0,
      variant: "text-body-400",
      customColor: "ink",
    };
  }

  return {
    children: formatter.format(file.projects[0].estimatedCellCount),
    variant: "text-body-400",
    customColor: "ink",
  };
};
