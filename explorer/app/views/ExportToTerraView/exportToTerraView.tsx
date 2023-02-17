import { AzulEntityStaticResponse } from "@clevercanary/data-explorer-ui/lib/apis/azul/common/entities";
import { ComponentCreator } from "@clevercanary/data-explorer-ui/lib/components/ComponentCreator/ComponentCreator";
import { BackPageView } from "@clevercanary/data-explorer-ui/lib/components/Layout/components/BackPage/backPageView";
import { useExportConfig } from "@clevercanary/data-explorer-ui/lib/hooks/useExportConfig";
import React from "react";
import { MainColumn } from "./mainColumn";
import { SideColumn } from "./sideColumn";

export const ExportToTerraView = (
  props: AzulEntityStaticResponse
): JSX.Element => {
  const exportConfig = useExportConfig();
  const top = exportConfig.top;

  return (
    <BackPageView
      mainColumn={<MainColumn />}
      sideColumn={<SideColumn />}
      top={<ComponentCreator components={top} response={props} />}
    />
  );
};
