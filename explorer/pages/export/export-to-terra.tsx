import { ExportToTerraForm } from "@clevercanary/data-explorer-ui/lib/components/Export/components/ExportToTerra/components/ExportToTerraForm/exportToTerraForm";
import { ExportToTerra } from "@clevercanary/data-explorer-ui/lib/components/Export/components/ExportToTerra/exportToTerra";
import { FILE_MANIFEST_TYPE } from "@clevercanary/data-explorer-ui/lib/hooks/useFileManifest/common/entities";
import { ExportMethodView } from "@clevercanary/data-explorer-ui/lib/views/ExportMethodView/exportMethodView";
import React from "react";
import * as MDX from "../../app/content/hca-dcp";
import { FORM_FACETS } from "../../site-config/hca-dcp/dev/export/constants";

const TITLE = "Export to Terra";

/**
 * Export to Terra page.
 * @returns export to Terra view component.
 */
const ExportToTerraPage = (): JSX.Element => {
  return (
    <ExportMethodView
      ExportMethod={
        <ExportToTerra
          ExportForm={ExportToTerraForm}
          ExportToTerraStart={MDX.ExportToTerraStart}
          ExportToTerraSuccess={MDX.ExportToTerraSuccessWithWarning}
          fileManifestType={FILE_MANIFEST_TYPE.EXPORT_TO_TERRA}
          formFacets={FORM_FACETS}
        />
      }
      title={TITLE}
    />
  );
};

export default ExportToTerraPage;
