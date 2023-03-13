import { ProjectsResponse } from "../apis/azul/hca-dcp/common/entities";

/**
 * Entity transformers. Used to have a configurable way to transform different response models into a
 * single view model expected by container components.
 */

/**
 * Determine the ID of the given detail type.
 * @param value - Response returned from endpoint.
 * @returns Project ID for the given projects response.
 */
export const getProjectId = (value: ProjectsResponse): string =>
  value.projects[0].projectId;
