// Core dependencies
import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";

// App dependencies
import { useRequestFileLocation } from "app/hooks/useRequestFileLocation";
import { DownloadIcon } from "../common/CustomIcon/components/DownloadIcon/downloadIcon";
import { LoadingIcon } from "../common/CustomIcon/components/LoadingIcon/loadingIcon";

// Styles
import { IconButtonPrimary } from "../common/IconButton/iconButton.styles";

interface AzulFileDownloadProps {
  url: string;
}

export const AzulFileDownload = ({
  url,
}: AzulFileDownloadProps): JSX.Element => {
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const { data, isLoading, isSuccess, run } = useRequestFileLocation(url);
  const fileLocation = data?.location;

  // Initiates file download when file location request is successful.
  useEffect(() => {
    if (isSuccess && fileLocation && downloadRef.current) {
      const downloadEl = downloadRef.current;
      downloadEl.href = fileLocation;
      downloadEl.click();
    }
  }, [fileLocation, isLoading, isSuccess]);

  /**
   * Initiate file location request.
   */
  const onFileLocationRequested = async (): Promise<void> => {
    run();
  };

  return (
    <>
      <IconButtonPrimary
        disabled={false}
        Icon={isLoading ? LoadingIcon : DownloadIcon}
        onClick={onFileLocationRequested}
        size="medium"
      />
      <Box component="a" download ref={downloadRef} sx={{ display: "none" }} />
    </>
  );
};
