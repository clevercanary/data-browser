import {
  FileLocationResponse,
  FILE_LOCATION_PENDING,
  FILE_LOCATION_SUCCESSFULLY,
} from "app/apis/azul/common/entities";
import { useEffect, useMemo } from "react";
import { useAsync } from "./useAsync";

export interface FileLocation {
  location: string;
  retryAfter?: number;
  status: number;
}

interface UseRequestFileLocationResult {
  data: FileLocation | undefined;
  isLoading: boolean;
}

type ResolveFn = (file: FileLocation | PromiseLike<FileLocation>) => void;
type RejectFn = (reason: FileLocation) => void;

export const getFileLocation = async (url: string): Promise<FileLocation> => {
  const res = await fetch(url);
  const jsonRes: FileLocationResponse = await res.json();
  return {
    location: jsonRes.Location,
    retryAfter: jsonRes["Retry-After"],
    status: jsonRes.Status,
  };
};

const scheduleFileLocation = (
  url: string,
  resolve: ResolveFn,
  reject: RejectFn,
  retryAfter = 0
): void => {
  setTimeout(() => {
    getFileLocation(url).then((result: FileLocation) => {
      if (result.status === FILE_LOCATION_PENDING) {
        scheduleFileLocation(
          result.location,
          resolve,
          reject,
          result.retryAfter
        );
      } else if (result.status === FILE_LOCATION_SUCCESSFULLY) {
        resolve(result);
      } else {
        reject(result);
      }
    });
  }, retryAfter);
};

/**
 * Hook to get a file location using a retry-after approach
 * @param url - to be used on the get request
 * @returns data object with the file location
 */
export const useRequestFileLocation = (
  url: string
): UseRequestFileLocationResult => {
  const { data, isIdle, isLoading, run } = useAsync<FileLocation>();

  const fileLocationPromise = useMemo(
    () =>
      new Promise<FileLocation>((resolve, reject) => {
        scheduleFileLocation(url, resolve, reject);
      }),
    [url]
  );

  useEffect(() => {
    run(fileLocationPromise);
  }, [fileLocationPromise, run]);

  return { data, isLoading: isLoading || isIdle };
};
