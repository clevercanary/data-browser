import React from "react";
import { ProjectResponse } from "app/models/responses";
import * as C from "../../../app/components";
import { ENTRIES } from "app/project-edits";
import { concatStrings } from "app/utils/string";

const getOrganizations = (project: ProjectResponse): string[] => {
  return Array.from(
    new Set(
      project.projects[0].contributors.map(
        (contributor) => contributor.institution
      )
    )
  );
};

export const projectToContacts = (
  project: ProjectResponse
): React.ComponentProps<typeof C.Contacts> => {
  if (!project) {
    return { contacts: [] };
  }

  const value = project.projects[0].contributors.filter(
    (item) => !!item.correspondingContributor
  );

  return {
    contacts: value.map((contributor) => ({
      name: contributor.contactName,
      email: contributor.email,
      institution: contributor.institution,
    })),
  };
};

export const projectsToContributors = (
  project: ProjectResponse
): React.ComponentProps<typeof C.Citations> => {
  if (!project) {
    return { citations: [] };
  }

  const projectValue = project.projects[0];
  const organizations = getOrganizations(project);

  return {
    citations: projectValue.contributors.map((contributor) => ({
      value: `${contributor.contactName} (${contributor.projectRole})`,
      citation: `${organizations.indexOf(contributor.institution) + 1}`,
    })),
  };
};

export const projectsToDataCurators = (
  project: ProjectResponse
): React.ComponentProps<typeof C.TextLinks> => {
  if (!project) {
    return { values: [] };
  }

  const curators = project.projects[0].contributors.filter(
    (contr) => contr.projectRole === "data curator"
  );

  return {
    values: curators.map((curator) => ({
      text: `${curator.contactName}`,
    })),
  };
};

export const projectsToAccessions = (
  project: ProjectResponse
): React.ComponentProps<typeof C.TextLinks> => {
  if (!project) {
    return { values: [] };
  }

  return {
    values: [],
  };
};

export const projectsToOrganizations = (
  project: ProjectResponse
): React.ComponentProps<typeof C.Citations> => {
  if (!project) {
    return { citations: [] };
  }

  const organizations = getOrganizations(project);

  return {
    align: "left",
    citations: organizations.map((organization, index) => ({
      value: organization,
      citation: `${index + 1}`,
    })),
  };
};

export const projectsToProjectLabel = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project) {
    return { label: "Project Label", value: "None" };
  }

  return {
    label: "Project Label",
    value: project.projects[0].projectShortname,
  };
};

export const projectsToSpecies = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project) {
    return { label: "Species", value: "None" };
  }

  return {
    label: "Species",
    value: concatStrings(project.donorOrganisms[0].genusSpecies),
  };
};

export const projectsToSampleType = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project) {
    return { label: "Sample Type", value: "None" };
  }

  return {
    label: "Sample Type",
    value: concatStrings(project.samples[0].sampleEntityType),
  };
};

export const projectsToAnatomicalEntity = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project) {
    return { label: "Anatomical Entity", value: "None" };
  }

  return {
    label: "Anatomical Entity",
    value: concatStrings(project.samples[0].organ),
  };
};

export const projectsToOrganPart = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project) {
    return { label: "Organ Part", value: "None" };
  }

  return {
    label: "Organ Part",
    value: concatStrings(project.samples[0].organPart),
  };
};

export const projectsToDiseaseSpecimen = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project) {
    return { label: "Disease Status (Specimen)", value: "None" };
  }

  return {
    label: "Disease Status (Specimen)",
    value: concatStrings(project.samples[0].disease),
  };
};

export const projectsToDiseaseDonor = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project) {
    return { label: "Disease Status (Donor)", value: "None" };
  }

  return {
    label: "Disease Status (Donor)",
    value: concatStrings(project.donorOrganisms[0].disease),
  };
};

export const projectsToDevelopmentStage = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project) {
    return { label: "Development Stage", value: "None" };
  }

  return {
    label: "Development Stage",
    value: concatStrings(project.donorOrganisms[0].developmentStage),
  };
};

export const projectsToLibConstMethod = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project.protocols[0]?.libraryConstructionApproach) {
    return { label: "Library Construction Method", value: "None" };
  }

  return {
    label: "Library Construction Method",
    value: concatStrings(project.protocols[0].libraryConstructionApproach),
  };
};

export const projectsToNucleicAcidSrc = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project.protocols[0]?.nucleicAcidSource) {
    return { label: "Nucleic Acid Source", value: "None" };
  }

  return {
    label: "Nucleic Acid Source",
    value: concatStrings(project.protocols[0].nucleicAcidSource),
  };
};

export const projectsToPairedEnd = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project.protocols[1]?.pairedEnd) {
    return { label: "Paired End", value: "None" };
  }

  return {
    label: "Paired End",
    value: concatStrings(
      project.protocols[1].pairedEnd.map((value) => `${value}`)
    ),
  };
};

export const projectsToAnalysisProtocol = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project.protocols[0].workflow) {
    return { label: "Analysis Protocol", value: "None" };
  }

  return {
    label: "Analysis Protocol",
    value: concatStrings(project.protocols[0].workflow),
  };
};

export const projectsToFileFormat = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project.fileTypeSummaries) {
    return { label: "File Format", value: "None" };
  }

  return {
    label: "File Format",
    value: concatStrings(
      project.fileTypeSummaries.map((fileType) => fileType.format)
    ),
  };
};

export const projectsToCellCount = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project) {
    return { label: "Cell Count Estimate", value: "None" };
  }

  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return {
    label: "Cell Count Estimate",
    value: `${formatter.format(project.projects[0].estimatedCellCount)}`,
  };
};

export const projectsToDonorCount = (
  project: ProjectResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project) {
    return { label: "Donor Count", value: "None" };
  }

  return {
    label: "Donor Count",
    value: `${project.donorOrganisms[0].donorCount}`,
  };
};

export const projectsToFileCounts = (
  project: ProjectResponse
): React.ComponentProps<typeof C.FileCounts> => {
  if (!project) {
    return { files: [] };
  }

  return {
    files: project.fileTypeSummaries.map((file) => ({
      name: file.format,
      count: file.count,
    })),
  };
};

export const projectsToProjDescription = (
  project: ProjectResponse
): React.ComponentProps<typeof C.Text> => {
  if (!project) {
    return { children: "None" };
  }

  return {
    variant: "text-body-400-2lines",
    customColor: "colorInk",
    children: project.projects[0].projectDescription,
  };
};

export const projectsToAnalysisPortals = (
  project: ProjectResponse
): React.ComponentProps<typeof C.IconList> => {
  if (!project) {
    return { icons: [] };
  }

  const entry = ENTRIES.find((entry) => entry.entryId === project.entryId);
  if (!entry?.analysisPortals) {
    return { icons: [] };
  }

  return {
    icons: entry.analysisPortals.map((entry) => ({
      label: entry.label,
      icon: entry.icon,
    })),
  };
};
