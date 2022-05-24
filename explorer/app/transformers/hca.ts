/**
 * Projects transformers. Used to have a configurable way to transform different response models into a
 * single view model expected by container components.
 */
import {
  ProjectResponse,
  ProjectViewModel,
  ListViewModel,
  ListResponseType,
} from "../models";

/**
 * Transforms a set of different response types (at the moment we only have ProjectResponse) to a viewModel, that will be used by
 * @see ProjectDetailContainer
 * @param value Api's response type
 * @returns @see ProjectViewModel
 */
export const detailToView = (value: ProjectResponse): ProjectViewModel => ({
  json: JSON.stringify(value, null, 2),
  projectName: value.projects[0].projectTitle,
});

/**
 * Transforms a list of project items to a viewModel for hca project
 * @see ListContainer
 * @param list API's response type
 * @returns @see ListViewModel
 */
export const hcaProjectListToView = (list: ListResponseType): ListViewModel => {
  return {
    items: list.hits.map((hit) => ({
      projectName: hit.projects[0].projectTitle,
      uuid: hit.projects[0].projectId,
    })),
  };
};

/**
 * Transforms a list of file items to a viewModel for hca project
 * @see ListContainer
 * @param list API's response type
 * @returns @see ListViewModel
 */
export const hcaFilesListToView = (list: ListResponseType): ListViewModel => {
  return {
    items: list.hits.map((hit) => ({
      projectName: hit.files?.[0].name ?? "",
      uuid: hit.files?.[0].uuid ?? "",
    })),
  };
};

/**
 * Transforms a list of sample items to a viewModel for hca project
 * @see ListContainer
 * @param list API's response type
 * @returns @see ListViewModel
 */
export const hcaSamplesListToView = (list: ListResponseType): ListViewModel => {
  return {
    items: list.hits.map((hit) => ({
      projectName: hit.samples?.[0].id ?? "",
      uuid: hit.samples?.[0].id ?? "",
    })),
  };
};
