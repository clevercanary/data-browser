import { ListResponseType, ListViewModel } from "app/models";
import { list } from "app/project/api";
import { useEffect } from "react";
import { useAsync } from "./useAsync";
import { useCurrentEntity } from "./useCurrentEntity";

interface UseEntityResponse {
  data?: ListViewModel;
  isLoading: boolean;
}

/**
 * Hook responsible to handle the load and transformation of the values that will be used by the listing pages.
 * If the current entity loaded statically, this hook will return the already loaded data. Otherwise, it will make
 * a request for the entity's pathUrl
 * @param value statically loaded data, if any
 * @returns a object with the loaded data and a flag indicating is the data is loading
 */
export const useEntityData = (value?: ListViewModel): UseEntityResponse => {
  const entity = useCurrentEntity();
  const {
    data: apiData,
    isLoading: apiIsLoading,
    run,
  } = useAsync<ListResponseType>();

  useEffect(() => {
    if (entity && !entity.loadStaticallyList) {
      run(list(entity.apiPath));
    }
  }, [entity, run]);

  if (!entity) {
    return { data: { items: [] }, isLoading: false };
  }

  if (entity.loadStaticallyList) {
    return { data: value, isLoading: false };
  }

  return {
    data: apiData ? entity.listTransformer(apiData) : { items: [] },
    isLoading: apiIsLoading,
  };
};
