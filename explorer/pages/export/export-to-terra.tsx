import React from "react";
import { config } from "../../app/config/config";
import { ExportToTerraView } from "../../app/views/ExportToTerraView/exportToTerraView";

/**
 * Export page.
 * @returns Element rendered as export page.
 */
const ExportToTerraPage = (): JSX.Element => {
  const siteConfig = config();
  if (!siteConfig.export) return <></>;
  return <ExportToTerraView />;
};

export default ExportToTerraPage;
