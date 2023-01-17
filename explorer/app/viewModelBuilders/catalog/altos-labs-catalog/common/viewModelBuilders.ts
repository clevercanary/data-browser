import React from "react";
import {
  AltosLabsCatalogEntity,
  AltosLabsCatalogFile,
} from "../../../../apis/catalog/altos-labs-catalog/common/entities";
import { ExploreState } from "../../../../common/context/exploreState";
import * as C from "../../../../components";
import { Breadcrumb } from "../../../../components/common/Breadcrumbs/breadcrumbs";
import {
  Key,
  Value,
} from "../../../../components/common/KeyValuePairs/keyValuePairs";
import { stringifyValues } from "../../../../components/Detail/common/utils";
import { METADATA_KEY } from "../../../../components/Index/common/entities";
import { getPluralizedMetadataLabel } from "../../../../components/Index/common/indexTransformer";
import { ANCHOR_TARGET } from "../../../../components/Links/common/entities";
import { getEntityConfig } from "../../../../config/config";

const S3_URI = {
  DIRECTORY_URL:
    "https://s3.console.aws.amazon.com/s3/buckets/altos-lab-project-app",
  FILE_URL: "https://s3.console.aws.amazon.com/s3/object/altos-lab-project-app",
};

/**
 * Build props for assay cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the assay cell.
 */
export const buildAssay = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: "Assays",
    values: altosLabsCatalogEntity.assay,
  };
};

/**
 * Build props for DOI cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the DOI cell.
 */
export const buildDOI = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.Link> => {
  return {
    label: altosLabsCatalogEntity.DOI,
    target: ANCHOR_TARGET.BLANK,
    url: altosLabsCatalogEntity.DOI,
  };
};

/**
 * Build props for MdxMarkdown component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the MdxMarkdown component.
 */
export const buildExperimentDescription = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.MdxMarkdown> => {
  return {
    source: altosLabsCatalogEntity.description,
  };
};

/**
 * Build props for KeyValuePairs component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the KeyValuePairs component.
 */
export const buildExperimentDetails = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.KeyValuePairs> => {
  const { assay, DOI, experimentType, shorthand, species, tissue } =
    altosLabsCatalogEntity;
  const keyValuePairs = new Map<Key, Value>();
  keyValuePairs.set("Assay", stringifyValues(assay));
  keyValuePairs.set(
    "DOI",
    C.Link({ label: DOI, target: ANCHOR_TARGET.BLANK, url: DOI })
  );
  keyValuePairs.set("Experiment Type", experimentType);
  keyValuePairs.set("Shorthand", shorthand);
  keyValuePairs.set("Species", stringifyValues(species));
  keyValuePairs.set("Tissue", stringifyValues(tissue));
  return {
    KeyElType: C.KeyElType,
    KeyValuesElType: (props) => C.Stack({ gap: 4, ...props }),
    ValueElType: C.ValueElType,
    keyValuePairs,
  };
};

/**
 * Build props for Hero component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @param exploreState - Global search state.
 * @returns Model to be used as props for the BackPageHero component.
 */
export const buildExperimentHero = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity,
  exploreState: ExploreState
): React.ComponentProps<typeof C.BackPageHero> => {
  const { title } = altosLabsCatalogEntity;
  return {
    breadcrumbs: getCatalogBreadcrumbs(exploreState, title),
    title,
  };
};

/**
 * Build props for experiment type cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the experiment type cell.
 */
export const buildExperimentType = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.Cell> => {
  return {
    value: altosLabsCatalogEntity.experimentType,
  };
};

/**
 * Build props for file type cell component from the given Altos Labs entity.
 * @param altosLabsCatalogFile - Altos Labs catalog file entity.
 * @returns Model to be used as props for the file type cell.
 */
export const buildFileType = (
  altosLabsCatalogFile: AltosLabsCatalogFile
): React.ComponentProps<typeof C.Cell> => {
  return {
    value: altosLabsCatalogFile.fileType,
  };
};

/**
 * Build props for initiative cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the initiative cell.
 */
export const buildInitiative = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.Cell> => {
  return {
    value: altosLabsCatalogEntity.initiative,
  };
};

/**
 * Build props for S3URI cell component from the given Altos Labs entity.
 * @param altosLabsCatalogFile - Altos Labs catalog file entity.
 * @returns Model to be used as props for the S3URI cell.
 */
export const buildS3URI = (
  altosLabsCatalogFile: AltosLabsCatalogFile
): React.ComponentProps<typeof C.Link> => {
  const { S3URI } = altosLabsCatalogFile;
  if (/^s3:\/\//g.test(S3URI)) {
    const S3URIPathname = getS3URIPathname(S3URI);
    if (S3URIPathname) {
      const S3URL = getS3URIUrl(S3URIPathname);
      return {
        label: S3URI,
        target: ANCHOR_TARGET.BLANK,
        url: S3URL.href,
      };
    }
  }
  return {
    label: S3URI,
    url: "",
  };
};

/**
 * Build props for shorthand cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the shorthand cell.
 */
export const buildShorthand = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.Cell> => {
  return {
    value: altosLabsCatalogEntity.shorthand,
  };
};

/**
 * Build props for species cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the species cell.
 */
export const buildSpecies = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: getPluralizedMetadataLabel(METADATA_KEY.SPECIES),
    values: altosLabsCatalogEntity.species,
  };
};

/**
 * Build props for tissue cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the tissue cell.
 */
export const buildTissue = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: getPluralizedMetadataLabel(METADATA_KEY.TISSUE),
    values: altosLabsCatalogEntity.tissue,
  };
};

/**
 * Build props for title cell component from the given Altos Labs entity.
 * @param altosLabsCatalogEntity - Altos Labs catalog entity.
 * @returns Model to be used as props for the title cell.
 */
export const buildTitle = (
  altosLabsCatalogEntity: AltosLabsCatalogEntity
): React.ComponentProps<typeof C.Link> => {
  const { shorthand, title } = altosLabsCatalogEntity;
  return {
    label: title,
    url: shorthand ? `/experiments/${shorthand}` : "",
  };
};

/**
 * Returns catalog related breadcrumbs.
 * @param exploreState - Global search state.
 * @param lastCrumbText - Study title to be displayed as last crumb text.
 * @returns catalog breadcrumbs.
 */
function getCatalogBreadcrumbs(
  exploreState: ExploreState,
  lastCrumbText?: string
): Breadcrumb[] {
  const { label, route } = getEntityConfig(exploreState.tabValue);
  const firstCrumb = {
    path: `/${route}`,
    text: label,
  };
  const breadcrumbs = [firstCrumb];
  if (lastCrumbText) {
    breadcrumbs.push({ path: "", text: lastCrumbText });
  }
  return breadcrumbs;
}

/**
 * Returns the S3URI pathname from the S3URI.
 * @param S3URI - S3URI.
 * @returns the S3URI pathname.
 */
function getS3URIPathname(S3URI: string): string | undefined {
  const matches = S3URI.match(/(\/\/.*?\/)(?<prefix>.*)/);
  return matches?.groups?.prefix;
}

/**
 * Returns the S3 url for the specified S3URI pathname and appends any relevant search parameters.
 * @param pathname - S3URI pathname.
 * @returns the S3 url.
 */
function getS3URIUrl(pathname: string): URL {
  const pathnameIsDirectory = isDirectory(pathname);
  let S3URL;
  if (pathnameIsDirectory) {
    S3URL = new URL(S3_URI.DIRECTORY_URL);
  } else {
    S3URL = new URL(S3_URI.FILE_URL);
  }
  S3URL.searchParams.append("region", "us-west-2");
  S3URL.searchParams.append("prefix", pathname);
  if (pathnameIsDirectory) {
    S3URL.searchParams.append("showversions", "false");
  }
  return S3URL;
}

/**
 * Returns true if the pathname is a directory.
 * @param pathname - Pathname.
 * @returns true if the pathname is a directory.
 */
function isDirectory(pathname: string): boolean {
  return !/\w+\.\w+$/g.test(pathname);
}
