import { NCPICatalogPlatform, NCPICatalogStudy } from "./entities";

// /**
//  * Returns the consent codes.
//  * @param ncpiCatalogEntity - NCPI catalog entity.
//  * @returns Array of consent codes.
//  */
// export const getConsentCodes = (
//   ncpiCatalogEntity: NCPICatalogEntity
// ): string[] => ncpiCatalogEntity.consentCodes ?? [];
//
// /**
//  * Returns the data types.
//  * @param ncpiCatalogEntity - NCPI catalog entity.
//  * @returns Array of data types.
//  */
// export const getDataTypes = (ncpiCatalogEntity: NCPICatalogEntity): string[] =>
//   ncpiCatalogEntity.dataTypes ?? [];

/**
 * Returns the study identifier.
 * @param ncpiCatalogStudy - NCPI catalog study.
 * @returns String value of dbGapId.
 */
export const getDbGapId = (ncpiCatalogStudy: NCPICatalogStudy): string =>
  ncpiCatalogStudy.dbGapId ?? "";

// /**
//  * Returns the focus/diseases.
//  * @param ncpiCatalogPlatform - NCPI catalog platform.
//  * @returns Array of focus/diseases.
//  */
// export const getFocusDiseases = (
//   ncpiCatalogPlatform: NCPICatalogPlatform
// ): string[] => ncpiCatalogPlatform.focuses || []; // focusDiseases - a list of focuses / diseases.
//
// /**
//  * Returns the participant count.
//  * @param ncpiCatalogEntity - NCPI catalog entity.
//  * @returns The number of participants in the study.
//  */
// export const getParticipantCount = (
//   ncpiCatalogEntity: NCPICatalogEntity
// ): number => ncpiCatalogEntity.participantCount ?? 0;

/**
 * Returns the platform.
 * @param ncpiCatalogPlatform - NCPI catalog platform.
 * @returns String value of platform.
 */
export const getPlatform = (ncpiCatalogPlatform: NCPICatalogPlatform): string =>
  ncpiCatalogPlatform.platform ?? ""; // platform - a singular platform.

// /**
//  * Returns the platforms.
//  * @param ncpiCatalogStudy - NCPI catalog study.
//  * @returns Array of platforms.
//  */
// export const getPlatforms = (ncpiCatalogStudy: NCPICatalogStudy): string[] =>
//   ncpiCatalogStudy.platforms ?? [];
//
// /**
//  * Returns the study designs.
//  * @param ncpiCatalogEntity - NCPI catalog entity.
//  * @returns Array of study designs.
//  */
// export const getStudyDesigns = (
//   ncpiCatalogEntity: NCPICatalogEntity
// ): string[] => ncpiCatalogEntity.studyDesigns ?? [];

// /**
//  * Returns the study names.
//  * @param ncpiCatalogPlatform - NCPI catalog platform.
//  * @returns Array of study names.
//  */
// export const getStudyNames = (
//   ncpiCatalogPlatform: NCPICatalogPlatform
// ): string[] => ncpiCatalogPlatform.titles || []; // studyNames - a list of study names.
