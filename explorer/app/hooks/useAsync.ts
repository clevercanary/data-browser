/**
 * Hook to make API async calls and handles the API result state.
 */
import React, { useCallback, useEffect, useReducer, useRef } from "react";
import { EntityConfig } from "./../config/common/entities";
import { useCurrentEntity } from "./useCurrentEntity";

/**
 * Hook to safely call an async function, by checking if the component is mounted before the call
 * @param dispatch - Function to be called in case the component is mounted.
 * @returns A memoized function that will call the @dispatch param or nothing.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- TODO revisit return type here
const useSafeDispatch = <T>(dispatch: (args: T) => void) => {
  const mounted = React.useRef(false);
  useEffect(() => {
    mounted.current = true;
    return (): void => {
      mounted.current = false;
    };
  }, []);
  return useCallback(
    (args: T) => (mounted.current ? dispatch(args) : void 0),
    [dispatch]
  );
};

type Error = { message: string };

interface State<T> {
  data?: T;
  dataEntityRoute: string;
  error?: Error;
  status: "idle" | "pending" | "rejected" | "resolved";
}

/**
 * Hook to safely call async functions and managing the result's state.
 * @returns set of functions to be used to as request handlers
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- TODO revisit return type here
export const useAsync = <T>() => {
  const entity = useCurrentEntity();
  const initialStateRef = useRef<State<T>>({
    dataEntityRoute: entity.route,
    status: "idle",
  });
  const [{ data, dataEntityRoute, error, status }, setState] = useReducer(
    (s: State<T>, a: State<T>) => ({ ...s, ...a }),
    initialStateRef.current
  );

  const safeSetState = useSafeDispatch(setState);

  const setData = useCallback(
    (dataEntityRoute: string, data?: T) =>
      safeSetState({
        data,
        dataEntityRoute,
        status: "resolved",
      }),
    [safeSetState]
  );
  const setError = useCallback(
    (dataEntityRoute: string, error: Error) =>
      safeSetState({
        dataEntityRoute,
        error,
        status: "rejected",
      }),
    [safeSetState]
  );
  const reset = useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState]
  );

  const run = useCallback(
    (promise: Promise<T>, dataEntity: EntityConfig = entity) => {
      const entityRoute = dataEntity.route;
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise.`
        );
      }
      safeSetState({ dataEntityRoute: entity.route, status: "pending" });
      return promise.then(
        (data: T) => {
          setData(entityRoute, data);
          return data;
        },
        (error: Error) => {
          setError(entityRoute, error);
          return Promise.reject(error);
        }
      );
    },
    [entity, safeSetState, setData, setError]
  );

  return {
    data,
    dataEntityRoute,
    error,
    isError: status === "rejected",
    isIdle: status === "idle",
    isLoading: status === "pending",
    isSuccess: status === "resolved",
    reset,
    run,
    status,
  };
};
