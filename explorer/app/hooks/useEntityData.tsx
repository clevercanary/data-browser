import { DetailModel, ListViewModel } from "app/models/viewModels";
import { DetailResponseType, ListResponseType } from "app/models/responses";
import { detail, list } from "app/entity/api/service";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAsync } from "./useAsync";
import { useCurrentEntity } from "./useCurrentEntity";
import { isSSR } from "app/utils/ssr";
import { isDevelopment } from "app/shared/constants";

interface UseEntityListResponse {
  data?: ListViewModel;
  isLoading: boolean;
}

interface UseEntityDetailResponse {
  isLoading: boolean;
  apiData?: DetailResponseType;
}

/**
 * Hook responsible to handle the load and transformation of the values that will be used by listing pages.
 * If the current entity loaded statically, this hook will return the already loaded data. Otherwise, it will make
 * a request for the entity's pathUrl
 * @param value statically loaded data, if any
 * @returns an object with the loaded data and a flag indicating is the data is loading
 */
export const useEntityListData = (
  value?: ListViewModel
): UseEntityListResponse => {
  const entity = useCurrentEntity();
  const {
    data: apiData,
    isLoading: apiIsLoading,
    run,
  } = useAsync<ListResponseType>();

  useEffect(() => {
    if (entity && !entity.staticLoad) {
      run(list(entity.apiPath));
    }
  }, [entity, run]);

  if (!entity) {
    return { data: { items: [] }, isLoading: false };
  }

  if (entity.staticLoad) {
    return { data: value, isLoading: false };
  }

  return {
    data: apiData ? entity.listTransformer(apiData) : { items: [] },
    isLoading: apiIsLoading,
  };
};

/**
 * Hook responsible to handle the load and transformation of the values that will be used by detail pages.
 * If the current entity loaded statically, this hook will return the already loaded data. Otherwise, it will make
 * a request for the entity's pathUrl
 * @param value statically loaded data, if any
 * @returns an object with the loaded data and a flag indicating is the data is loading
 */
export const useEntityDetailData = (
  value?: DetailModel
): UseEntityDetailResponse => {
  const entity = useCurrentEntity();
  const router = useRouter();
  const uuid = router.query.uuid as string;
  const {
    data: apiData,
    isLoading: apiIsLoading,
    run,
  } = useAsync<DetailResponseType>();

  useEffect(() => {
    if (entity && (!entity.staticLoad || isDevelopment()) && !isSSR() && uuid) {
      run(detail(uuid, entity.apiPath));
    }
  }, [entity, run, uuid]);

  if (!entity) {
    return { isLoading: false }; //TODO: return a error to make the user know that the entity doest exist
  }

  if (entity.staticLoad && !isDevelopment()) {
    return { isLoading: false, apiData: value?.data };
  }

  return {
    apiData,
    isLoading: apiIsLoading,
  };
};
