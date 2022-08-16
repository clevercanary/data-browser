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
  } else if (isLoading) {
    return <Loading loading={true} />;
  } else if (!isLoading && isSuccess) {
    return <ExportToTerraReady terraUrl={`${url}?${params.toString()}`} />;
  } else {
    return <p>BAD</p>;
  }
};
