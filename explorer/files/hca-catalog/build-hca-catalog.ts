import { readFile } from "fs/promises";
import { HCACatalogProject } from "../../app/apis/catalog/hca-catalog/common/entities";
import { writeAsJSON } from "../common/utils";

const sourceJsonPath = "hca-catalog/files/catalog-source.json";

interface HCACatalogSource {
  _embedded: {
    projects: HCAProjectSource[];
  };
}

interface HCAProjectSource {
  cellCount: null | number;
  content: {
    contributors?: Array<{
      institution?: string;
      laboratory?: string;
      last?: string;
      name?: string;
      project_role?: {
        ontology_label?: string;
      };
    }>;
    funders?: Array<{
      organization: string;
    }>;
    project_core: {
      project_description?: string;
      project_title: string;
    };
    publications?: Array<{
      doi?: string;
    }>;
    supplementary_links?: string[];
  };
  identifyingOrganisms: null | "" | string[];
  organ: null | {
    ontologies: Array<{ ontology_label: string }>;
  };
  publicationsInfo?: Array<{
    doi?: string;
  }>;
  technology: null | {
    ontologies: Array<{ ontology_label: string }>;
  };
  uuid: {
    uuid: string;
  };
}

async function buildHCACatalog(): Promise<void> {
  let file;
  try {
    file = await readFile(sourceJsonPath, "utf8");
  } catch (err) {
    throw new Error(`File ${sourceJsonPath} not found`);
  }

  const catalogSource = JSON.parse(file) as HCACatalogSource;

  const projects: HCACatalogProject[] = catalogSource._embedded.projects.map(
    buildHCACatalogProject
  );

  await writeAsJSON(
    "hca-catalog/out/hca-catalog-projects.json",
    Object.fromEntries(projects.entries())
  );
}

function buildHCACatalogProject(
  projectSource: HCAProjectSource
): HCACatalogProject {
  const cellCount = projectSource.cellCount;
  const doi: string[] = [];
  const funder: string[] = [];
  const organ = (projectSource.organ?.ontologies || []).map(
    (ontology) => ontology.ontology_label
  );
  const projectDescription =
    projectSource.content.project_core.project_description || "";
  const projectTitle = projectSource.content.project_core.project_title;
  const species = projectSource.identifyingOrganisms || [];
  const supplementaryLink = projectSource.content.supplementary_links || [];
  const technology = (projectSource.technology?.ontologies || []).map(
    (ontology) => ontology.ontology_label
  );
  const uuid = projectSource.uuid.uuid;
  const contributorFields = accumulateContributorFields(projectSource);

  for (const publication of projectSource.content.publications || []) {
    accumulateString(doi, publication.doi);
  }

  for (const publication of projectSource.publicationsInfo || []) {
    accumulateString(doi, publication.doi);
  }

  for (const { organization } of projectSource.content.funders || []) {
    accumulateString(funder, organization);
  }

  return {
    cellCount,
    doi,
    funder,
    organ,
    projectDescription,
    projectTitle,
    species,
    supplementaryLink,
    technology,
    uuid,
    ...contributorFields,
  };
}

function accumulateContributorFields(
  projectSource: HCAProjectSource
): Pick<HCACatalogProject, "contributor" | "institution" | "laboratory"> {
  const contributor: string[] = [];
  const institution: string[] = [];
  const laboratory: string[] = [];

  for (const contributorInfo of projectSource.content.contributors || []) {
    if (contributorInfo.project_role?.ontology_label !== "data curator") {
      accumulateString(
        contributor,
        contributorInfo.name || contributorInfo.last
      );
      accumulateString(institution, contributorInfo.institution);
      accumulateString(laboratory, contributorInfo.laboratory);
    }
  }

  return { contributor, institution, laboratory };
}

/**
 * Add a string to an array if it is not already present.
 * @param array - Array to accumulate values into.
 * @param value - String to accumulate.
 * @param trim - Whether to trim the string before accumulating.
 */
function accumulateString(array: string[], value?: string, trim = true): void {
  if (value) {
    if (trim) value = value.trim();
    if (!array.includes(value)) {
      array.push(value);
    }
  }
}

buildHCACatalog();
