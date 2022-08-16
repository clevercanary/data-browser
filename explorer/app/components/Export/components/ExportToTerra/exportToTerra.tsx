import { useRequestFileLocation } from "../../../../hooks/useRequestFileLocation";
import { Loading } from "../../../Loading/loading";
import { ExportToTerraNotStarted } from "./components/ExportToTerraNotStarted/exportToTerraNotStarted";
import { ExportToTerraReady } from "./components/ExportToTerraReady/exportToTerraReady";

interface ExportToTerraProps {
  params: URLSearchParams;
  url: string;
}

export const ExportToTerra = ({
  params,
  url,
}: ExportToTerraProps): JSX.Element => {
  const { data, isLoading, isSuccess, run } = useRequestFileLocation(
    `${url}?${params.toString()}`
  );
  if (!isLoading && !isSuccess) {
    return <ExportToTerraNotStarted run={run} />;
  } else if (!isLoading && isSuccess) {
    return (
      <ExportToTerraReady
        terraUrl={`https://app.terra.bio/#import-data?${data?.location}`}
      />
    );
  } else {
    return <Loading loading={true} />;
  }
};
