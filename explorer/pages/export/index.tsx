import React from "react";
import { config } from "../../app/config/config";
import { ExportView as ExportPageView } from "../../app/views/ExportView/exportView";

/**
 * Export page.
 * @returns Element rendered as export page.
 */
const ExportPage = (): JSX.Element => {
  const siteConfig = config();
  if (!siteConfig.export) return <></>;
  return <ExportPageView />;
};

export default ExportPage;
