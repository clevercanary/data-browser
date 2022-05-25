import {
  DetailResponseType,
  DetailViewModel,
  ListResponseType,
  ListViewModel,
} from "app/models";
import { detail, list } from "app/project/api";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAsync } from "./useAsync";
import { useCurrentEntity } from "./useCurrentEntity";

interface UseEntityListResponse {
  data?: ListViewModel;
  isLoading: boolean;
}

interface UseEntityDetailResponse {
  data?: DetailViewModel;
  isLoading: boolean;
}

/**
 * Hook responsible to handle the load and transformation of the values that will be used by listing pages.
 * If the current entity loaded statically, this hook will return the already loaded data. Otherwise, it will make
 * a request for the entity's pathUrl
 * @param value statically loaded data, if any
 * @returns a object with the loaded data and a flag indicating is the data is loading
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

/**
 * Hook responsible to handle the load and transformation of the values that will be used by detail pages.
 * If the current entity loaded statically, this hook will return the already loaded data. Otherwise, it will make
 * a request for the entity's pathUrl
 * @param value statically loaded data, if any
 * @returns a object with the loaded data and a flag indicating is the data is loading
 */
export const useEntityDetailData = (
  value?: DetailViewModel
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
    if (entity && !entity.loadStaticallyDetail) {
      run(detail(uuid, entity.apiPath));
    }
  }, [entity, run, uuid]);

  if (!entity) {
    return { data: {}, isLoading: false };
  }

  if (entity.loadStaticallyDetail) {
    return { data: value, isLoading: false };
  }

  return {
    data: apiData ? entity.detailTransformer(apiData) : {},
    isLoading: apiIsLoading,
  };
};
