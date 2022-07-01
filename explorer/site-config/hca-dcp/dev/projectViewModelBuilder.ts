// Core dependencies
import React from "react";

// App dependencies
import * as C from "app/components";
import {
  getProjectContributors,
  getProjectContacts,
  getProjectDescription,
  getProjectPath,
  getProjectSupplementaryLinks,
} from "app/components/Project/common/projectTransformer";
import { STATUS } from "app/components/StatusBadge/statusBadge";
import { ProjectsResponse } from "app/models/responses";
import { ENTRIES } from "app/project-edits";
import { concatStrings } from "app/utils/string";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

export const buildCitation = (
  projectResponse: ProjectsResponse
): React.ComponentProps<typeof C.Citation> => {
  return {
    projectPath: getProjectPath(projectResponse),
  };
};

export const buildContacts = (
  projectResponse: ProjectsResponse
): React.ComponentProps<typeof C.Contacts> => {
  return {
    contacts: getProjectContacts(projectResponse),
  };
};

export const buildContributors = (
  projectResponse: ProjectsResponse
): React.ComponentProps<typeof C.Contributors> => {
  return {
    contributors: getProjectContributors(projectResponse),
  };
};

export const buildDescription = (
  projectResponse: ProjectsResponse
): React.ComponentProps<typeof C.Description> => {
  return {
    projectDescription: getProjectDescription(projectResponse) || "None",
  };
};

export const buildSupplementaryLinks = (
  projectResponse: ProjectsResponse
): React.ComponentProps<typeof C.SupplementaryLinks> => {
  return {
    supplementaryLinks: getProjectSupplementaryLinks(projectResponse),
  };
};

const getOrganizations = (project: ProjectsResponse): string[] => {
  return Array.from(
    new Set(
      project.projects[0].contributors.map(
        (contributor) => contributor.institution
      )
    )
  );
};

export const projectsToDataCurators = (
  project: ProjectsResponse
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

// TODO: These values are hardcoded for now, but we should be able to get them from the API
export const projectsToAccessions = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.TextLinks> => {
  if (!project) {
    return { values: [] };
  }

  return {
    values: [
      {
        link: {
          label: "E-MTAB-8581",
          url: "https://www.ebi.ac.uk/arrayexpress/access/experiments/E-MTAB-8581",
        },
        text: "Array Express Accessions: ",
      },
    ],
  };
};

export const projectsToOrganizations = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.Citations> => {
  if (!project) {
    return { citations: [] };
  }

  const organizations = getOrganizations(project);

  return {
    align: "left",
    citations: organizations.map((organization, index) => ({
      citation: `${index + 1}`,
      value: organization,
    })),
  };
};

export const projectsToProjectLabel = (
  project: ProjectsResponse
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
  project: ProjectsResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project.donorOrganisms?.[0]?.genusSpecies) {
    return { label: "Species", value: "None" };
  }

  return {
    label: "Species",
    value: concatStrings(project.donorOrganisms[0].genusSpecies),
  };
};

export const projectsToSampleType = (
  project: ProjectsResponse
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
  project: ProjectsResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project.samples?.[0]?.organ) {
    return { label: "Anatomical Entity", value: "None" };
  }

  return {
    label: "Anatomical Entity",
    value: concatStrings(project.samples[0].organ),
  };
};

export const projectsToOrganPart = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project.samples?.[0]?.organPart) {
    return { label: "Organ Part", value: "None" };
  }

  return {
    label: "Organ Part",
    value: concatStrings(project.samples[0].organPart),
  };
};

export const projectsToDiseaseSpecimen = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project.samples?.[0]?.disease) {
    return { label: "Disease Status (Specimen)", value: "None" };
  }

  return {
    label: "Disease Status (Specimen)",
    value: concatStrings(project.samples[0].disease),
  };
};

export const projectsToDiseaseDonor = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project.donorOrganisms?.[0]?.disease) {
    return { label: "Disease Status (Donor)", value: "None" };
  }

  return {
    label: "Disease Status (Donor)",
    value: concatStrings(project.donorOrganisms[0].disease),
  };
};

export const projectsToDevelopmentStage = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project.donorOrganisms?.[0]?.developmentStage) {
    return { label: "Development Stage", value: "None" };
  }

  return {
    label: "Development Stage",
    value: concatStrings(project.donorOrganisms[0].developmentStage),
  };
};

export const projectsToLibConstMethod = (
  project: ProjectsResponse
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
  project: ProjectsResponse
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
  project: ProjectsResponse
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
  project: ProjectsResponse
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
  project: ProjectsResponse
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
  project: ProjectsResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project) {
    return { label: "Cell Count Estimate", value: "None" };
  }

  return {
    label: "Cell Count Estimate",
    value: `${formatter.format(project.projects[0].estimatedCellCount)}`,
  };
};

export const projectsToDonorCount = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.LabelValue> => {
  if (!project.donorOrganisms?.[0]?.donorCount) {
    return { label: "Donor Count", value: "None" };
  }

  return {
    label: "Donor Count",
    value: `${project.donorOrganisms[0].donorCount}`,
  };
};

export const projectsToFileCounts = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.FileCounts> => {
  if (!project) {
    return { files: [] };
  }

  return {
    files: project.fileTypeSummaries.map((file) => ({
      count: file.count,
      name: file.format,
    })),
  };
};

export const projectsToProjStatus = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.StatusBadge> => {
  if (!project) {
    return { status: STATUS.NONE };
  }

  return { status: STATUS.NONE };
};

export const projectsToProjTitle = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.ProjectTitle> => {
  if (!project) {
    return { projectTitle: "" };
  }

  return {
    projectTitle: project?.projects[0].projectTitle,
  };
};

export const projectsToAnalysisPortals = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.IconList> => {
  if (!project.entryId) {
    return { icons: [] };
  }

  const entry = ENTRIES.find((entry) => entry.entryId === project.entryId);
  if (!entry?.analysisPortals) {
    return { icons: [] };
  }

  return {
    icons: entry.analysisPortals.map((entry) => ({
      icon: {
        alt: entry.label ?? "",
        path: entry.icon,
      },
      label: entry.label,
    })),
  };
};

export const projectsToProjectTitleColumn = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.Links> => {
  return {
    links: [
      {
        label: project.projects[0].projectTitle,
        url: `/explore/projects/${project.projects[0].projectId}`,
      },
    ],
  };
};

/* eslint-disable sonarjs/no-duplicate-string -- ignoring duplicate strings here */
export const projectsToSpeciesColumn = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.Text> => {
  if (!project.donorOrganisms) {
    return {
      children: "",
    };
  }
  return {
    children: concatStrings(
      project.donorOrganisms.flatMap((orgnanism) => orgnanism.genusSpecies)
    ),
    customColor: "ink",
    variant: "text-body-400",
  };
};

export const projectsToCellCountColumn = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.Text> => {
  if (!project.cellSuspensions?.[0]) {
    return {
      children: "",
    };
  }
  return {
    children: `${formatter.format(project.cellSuspensions[0].totalCells)}`,
    customColor: "ink",
    variant: "text-body-400",
  };
};

export const projectsToLibConstApproachColumn = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.Text> => {
  if (!project.protocols?.[0].libraryConstructionApproach) {
    return {
      children: "",
    };
  }

  return {
    children: concatStrings(project.protocols[0].libraryConstructionApproach),
    customColor: "ink",
    variant: "text-body-400",
  };
};

export const projectsToAnatomicalEntityColumn = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.Text> => {
  if (!project.samples?.[0]?.organ) {
    return {
      children: "",
    };
  }
  return {
    children: concatStrings(project.samples[0].organ),
    customColor: "ink",
    variant: "text-body-400",
  };
};

export const projectsToDiseaseDonorColumn = (
  project: ProjectsResponse
): React.ComponentProps<typeof C.Text> => {
  if (!project.donorOrganisms?.[0]) {
    return {
      children: "",
    };
  }

  return {
    children: concatStrings(project.donorOrganisms[0].disease),
    customColor: "ink",
    variant: "text-body-400",
  };
};
/* eslint-enable sonarjs/no-duplicate-string -- watching for duplicate strings here */
