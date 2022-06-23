// App dependencies
import { ProjectResponse } from "../../../../models/responses";

/**
 * Maps project description.
 * @param project - project response
 * @returns string representation of project description
 */
export function mapProjectDescription(
  project?: ProjectResponse
): string | undefined {
  return project?.projects[0].projectDescription;
}
