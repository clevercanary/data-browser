import { stringifyValues } from "@clevercanary/data-explorer-ui/lib/common/utils";
import { Breadcrumb } from "@clevercanary/data-explorer-ui/lib/components/common/Breadcrumbs/breadcrumbs";
import {
  Key,
  Value,
} from "@clevercanary/data-explorer-ui/lib/components/common/KeyValuePairs/keyValuePairs";
import { ANCHOR_TARGET } from "@clevercanary/data-explorer-ui/lib/components/Links/common/entities";
import { ViewContext } from "@clevercanary/data-explorer-ui/lib/config/entities";
import React, { ReactElement } from "react";
import { HCACatalogProject } from "../../../../apis/catalog/hca-catalog/common/entities";
import * as C from "../../../../components";

/**
 * Build props for contributor cell component from the given HCA catalog entity.
 * @param hcaCatalogProject - HCA catalog project.
 * @returns Model to be used as props for the contributor cell.
 */
export const buildContributor = (
  hcaCatalogProject: HCACatalogProject
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: "contributors", // TODO: use metadata key?
    values: hcaCatalogProject.contributor,
  };
};

/**
 * Build props for funder cell component from the given HCA catalog entity.
 * @param hcaCatalogProject - HCA catalog project.
 * @returns Model to be used as props for the funder cell.
 */
export const buildFunder = (
  hcaCatalogProject: HCACatalogProject
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: "funders", // TODO: use metadata key?
    values: hcaCatalogProject.funder,
  };
};

/**
 * Build props for institution cell component from the given HCA catalog entity.
 * @param hcaCatalogProject - HCA catalog project.
 * @returns Model to be used as props for the institution cell.
 */
export const buildInstitution = (
  hcaCatalogProject: HCACatalogProject
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: "institutions", // TODO: use metadata key?
    values: hcaCatalogProject.institution,
  };
};

/**
 * Build props for laboratory cell component from the given HCA catalog entity.
 * @param hcaCatalogProject - HCA catalog project.
 * @returns Model to be used as props for the laboratory cell.
 */
export const buildLaboratory = (
  hcaCatalogProject: HCACatalogProject
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: "laboratories", // TODO: use metadata key?
    values: hcaCatalogProject.laboratory,
  };
};

/**
 * Build props for organ cell component from the given HCA catalog entity.
 * @param hcaCatalogProject - HCA catalog project.
 * @returns Model to be used as props for the organ cell.
 */
export const buildOrgan = (
  hcaCatalogProject: HCACatalogProject
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: "organs", // TODO: use metadata key?
    values: hcaCatalogProject.organ,
  };
};

/**
 * Build props for cell count cell component from the given HCA catalog entity.
 * @param hcaCatalogProject - HCA catalog project.
 * @returns Model to be used as props for the cell count cell.
 */
export const buildCellCount = (
  hcaCatalogProject: HCACatalogProject
): React.ComponentProps<typeof C.Cell> => {
  return {
    value:
      hcaCatalogProject.cellCount === null
        ? "-"
        : hcaCatalogProject.cellCount.toLocaleString(),
  };
};

/**
 * Build props for Markdown component from the given HCA catalog entity.
 * @param hcaCatalogProject - HCA catalog project.
 * @returns model to be used as props for the Markdown component.
 */
export const buildProjectDescription = (
  hcaCatalogProject: HCACatalogProject
): React.ComponentProps<typeof C.Markdown> => {
  return {
    content: hcaCatalogProject.projectDescription || "None",
  };
};

/**
 * Build props for Hero component from the given HCA catalog entity.
 * @param hcaCatalogProject - HCA catalog project.
 * @param viewContext - View context.
 * @returns model to be used as props for the BackPageHero component.
 */
export const buildProjectHero = (
  hcaCatalogProject: HCACatalogProject,
  viewContext: ViewContext
): React.ComponentProps<typeof C.BackPageHero> => {
  const { projectTitle } = hcaCatalogProject;
  return {
    breadcrumbs: getCatalogBreadcrumbs(viewContext, projectTitle),
    title: projectTitle,
  };
};

/**
 * Build props for Details component from the given HCA catalog entity.
 * @param hcaCatalogProject - HCA catalog study.
 * @returns model to be used as props for the Details component.
 */
export const buildProjectSummary = (
  hcaCatalogProject: HCACatalogProject
): React.ComponentProps<typeof C.KeyValuePairs> => {
  const {
    cellCount,
    contributor,
    doi,
    funder,
    institution,
    laboratory,
    organ,
    species,
    technology,
  } = hcaCatalogProject;
  const keyValuePairs = new Map<Key, Value>();
  keyValuePairs.set("DOI", getProjectDOIKeyValue(doi));
  keyValuePairs.set(
    "Cell Count",
    cellCount === null ? "-" : cellCount.toLocaleString()
  );
  keyValuePairs.set("Organs", stringifyValues(organ));
  keyValuePairs.set("Species", stringifyValues(species));
  keyValuePairs.set("Technologies", stringifyValues(technology));
  keyValuePairs.set("Contributors", stringifyValues(contributor));
  keyValuePairs.set("Funders", stringifyValues(funder));
  keyValuePairs.set("Institutions", stringifyValues(institution));
  keyValuePairs.set("Laboratories", stringifyValues(laboratory));
  return {
    KeyElType: C.KeyElType,
    KeyValuesElType: (props) => C.Stack({ gap: 4, ...props }),
    ValueElType: C.ValueElType,
    keyValuePairs,
  };
};

/**
 * Build props for project title cell component from the given HCA catalog entity.
 * @param project - HCA catalog project.
 * @returns Model to be used as props for the project title cell.
 */
export const buildProjectTitle = (
  project: HCACatalogProject
): React.ComponentProps<typeof C.Link> => {
  const { projectTitle, uuid } = project;
  return {
    label: projectTitle,
    url: `/projects/${uuid}`,
  };
};

/**
 * Build props for species cell component from the given HCA catalog entity.
 * @param hcaCatalogProject - HCA catalog project.
 * @returns Model to be used as props for the species cell.
 */
export const buildSpecies = (
  hcaCatalogProject: HCACatalogProject
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: "species", // TODO: use metadata key?
    values: hcaCatalogProject.species,
  };
};

/**
 * Build props for technology cell component from the given HCA catalog entity.
 * @param hcaCatalogProject - HCA catalog project.
 * @returns Model to be used as props for the technology cell.
 */
export const buildTechnology = (
  hcaCatalogProject: HCACatalogProject
): React.ComponentProps<typeof C.NTagCell> => {
  return {
    label: "technologies", // TODO: use metadata key?
    values: hcaCatalogProject.technology,
  };
};

/**
 * Returns catalog related breadcrumbs.
 * @param viewContext - View context.
 * @param lastCrumbText - Project title to be displayed as last crumb text.
 * @returns catalog breadcrumbs.
 */
function getCatalogBreadcrumbs(
  viewContext: ViewContext,
  lastCrumbText?: string
): Breadcrumb[] {
  const { label, route } = viewContext.entityConfig;
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

function getProjectDOIKeyValue(doi: string[]): string | ReactElement {
  if (doi.length === 0) return "Unspecified";
  return C.Stack({
    children: C.Links({
      links: doi.map((doiName) => ({
        label: doiName,
        target: ANCHOR_TARGET.BLANK,
        url: `https://www.doi.org/${doiName}`,
      })),
    }),
  });
}
