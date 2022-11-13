// /**

import { NCPIStudy } from "../../../../../files/ncpi-catalog/build-ncpi-catalog";
import {
  sanitizeString,
  sanitizeStringArray,
} from "../../../../viewModelBuilders/common/utils";

export type NCPICatalogEntity = NCPICatalogPlatform | NCPICatalogStudy;

export interface NCPICatalogPlatform {
  consentCode: string[];
  dataType: string[];
  dbGapId: string[]; // dbGapIds - a list of study ids.
  focus: string[]; // focusDiseases - a list of focuses / diseases.
  participantCount: number;
  platform: string; // platform - a singular platform.
  studyAccession: string[]; // studyAccessions - a list of study accessions.
  studyDesign: string[];
  title: string[]; // studyNames - a list of study names.
}

export interface NCPICatalogStudy {
  consentCode: string[];
  dataType: string[];
  dbGapId: string;
  focus: string;
  participantCount: number;
  platform: string[];
  studyAccession: string[];
  studyDesign: string[];
  title: string;
}

export function NCPIStudyInputMapper(ncpiStudy: NCPIStudy): NCPICatalogStudy {
  //TODO better place for this definition
  const ncpiCatalogStudy: NCPICatalogStudy = {
    consentCode: sanitizeStringArray(ncpiStudy.consentCodes),
    dataType: sanitizeStringArray(ncpiStudy.dataTypes),
    dbGapId: ncpiStudy.dbGapId,
    focus: sanitizeString(ncpiStudy.focus),
    participantCount: ncpiStudy.participantCount,
    platform: ncpiStudy.platforms,
    studyAccession: [ncpiStudy.studyAccession],
    studyDesign: ncpiStudy.studyDesigns,
    title: sanitizeString(ncpiStudy.title),
  };
  return ncpiCatalogStudy;
}

export function NCPIPlatformInputMapper(
  ncpiPlatform: NCPICatalogPlatform
): NCPICatalogPlatform {
  //TODO better place for this definition
  const ncpiCatalogPlatform: NCPICatalogPlatform = {
    consentCode: sanitizeStringArray(ncpiPlatform.consentCode),
    dataType: sanitizeStringArray(ncpiPlatform.dataType),
    dbGapId: sanitizeStringArray(ncpiPlatform.dbGapId),
    focus: sanitizeStringArray(ncpiPlatform.focus),
    participantCount: ncpiPlatform.participantCount,
    platform: ncpiPlatform.platform,
    studyAccession: ncpiPlatform.studyAccession,
    studyDesign: ncpiPlatform.studyDesign,
    title: sanitizeStringArray(ncpiPlatform.title),
  };

  return ncpiCatalogPlatform;
}

/**
 * Returns the platform.
 * @param ncpiCatalogPlatform - NCPI catalog platform.
 * @returns String value of platform.
 */
export const getPlatform = (ncpiCatalogPlatform: NCPICatalogPlatform): string =>
  ncpiCatalogPlatform.platform ?? ""; // platform - a singular platform.
/**
 * Returns the study identifier.
 * @param ncpiCatalogStudy - NCPI catalog study.
 * @returns String value of dbGapId.
 */
export const getDbGapId = (ncpiCatalogStudy: NCPICatalogStudy): string =>
  ncpiCatalogStudy.dbGapId ?? "";
