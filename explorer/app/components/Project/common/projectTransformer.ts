// App dependencies
import { ProjectResponse } from "app/models/responses";
import { Contact } from "../components/Contacts/contacts";
import {
  CONTRIBUTOR_ROLE,
  Contributor,
} from "../components/Contributors/contributors";
import { ContributorResponse } from "./entities";

/**
 * Builds project citation path from projectId.
 * @param project - Project response model return from API.
 * @returns string representation of project citation path.
 */
export function buildProjectCitationPath(project?: ProjectResponse): string {
  if (!project) {
    return "";
  }

  return `explore/projects/${project.projects[0].projectId}`;
}

/**
 * Builds project contributors from API response.
 * @param project - Project response model return from API.
 * @returns project contributors with their corresponding [organization] citation number.
 */
export function buildProjectContributors(
  project?: ProjectResponse
): Contributor[] | undefined {
  if (!project) {
    return;
  }

  // Filter for project contributors (contributors without the "data curator" role).
  const contributors = project.projects[0].contributors;
  const projectContributors =
    filterContributorsWithProjectContributors(contributors);

  if (projectContributors.length === 0) {
    return; // Caller is expecting undefined, not an empty array.
  }

  // Map the key-value pair contributor organizations and citation.
  const citationByContributorOrganizations =
    getCitationByCollaboratingOrganizations(projectContributors);

  return projectContributors.map((projectContributor) => {
    return {
      citation: citationByContributorOrganizations.get(
        projectContributor.institution
      ),
      name: formatContributor(projectContributor.contactName),
      role: projectContributor.projectRole,
    };
  });
}

/**
 * Maps project contacts from API response.
 * @param project - Project response model return from API.
 * @returns project contacts.
 */
export function getProjectContacts(project?: ProjectResponse): Contact[] {
  if (!project) {
    return [];
  }
  return project?.projects[0].contributors
    .filter((contributor) => contributor.correspondingContributor)
    .map(({ contactName, email, institution }) => {
      return { email, institution, name: contactName };
    });
}

/**
 * Maps project description from API response.
 * @param project - Project response model return from API.
 * @returns string representation of project description.
 */
export function getProjectDescription(
  project?: ProjectResponse
): string | undefined {
  return project?.projects[0].projectDescription;
}

/**
 * Returns the list of contributors for the project.
 * Will exclude any contributor with role "data curator".
 * @param contributors - Project contributor response model return from API.
 * @returns project contributors.
 */
function filterContributorsWithProjectContributors(
  contributors: ContributorResponse[]
): ContributorResponse[] {
  return contributors.filter(
    (contributor) => !isContributorDataCurator(contributor.projectRole)
  );
}

/**
 * Formats name from "firstName,middleName,lastName" to "firstName middleName lastName".
 * @param commaDelimitedName
 * @returns formatted name "firstName middleName lastName".
 */
function formatContributor(commaDelimitedName: string): string {
  return commaDelimitedName.split(/[ ,]+/).join(" ");
}

/**
 * Map key-value pair of collaborating organizations and corresponding citation.
 * @param contributors - Project contributor response model return from API.
 * @returns collaborating organizations keyed by their citation.
 */
function getCitationByCollaboratingOrganizations(
  contributors: ContributorResponse[]
): Map<string, number> {
  const setOfCollaboratingOrganizations = new Set(
    contributors.map((contributor) => contributor.institution)
  );
  return new Map(
    Array.from(setOfCollaboratingOrganizations).map((organization, i) => [
      organization,
      i + 1,
    ])
  );
}

/**
 * Returns true if the contributor role is "data curator".
 * @param projectRole - Project contributor role.
 * @returns true if the contributor role is "data curator".
 */
function isContributorDataCurator(projectRole: string | undefined): boolean {
  return (
    Boolean(projectRole) &&
    projectRole?.toLowerCase() === CONTRIBUTOR_ROLE.DATA_CURATOR
  );
}
