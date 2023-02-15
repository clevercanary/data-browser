import { BackPageView } from "@clevercanary/data-explorer-ui/lib/components/Layout/components/BackPage/backPageView";
import { AzulEntityStaticResponse } from "app/apis/azul/common/entities";
import { ComponentCreator } from "app/components/ComponentCreator/ComponentCreator";
import { useExportConfig } from "app/hooks/useExportConfig";
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
