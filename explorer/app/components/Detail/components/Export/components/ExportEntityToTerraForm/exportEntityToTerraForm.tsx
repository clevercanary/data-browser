import { Filters } from "@clevercanary/data-explorer-ui/lib/common/entities";
import { useDetailState } from "@clevercanary/data-explorer-ui/lib/hooks/useDetailState";
import React, { useEffect, useState } from "react";
import { ExportFilterKeyExportCategory } from "../../common/entities";

export interface ExportEntityToTerraFormProps {
  entityFilters?: Filters; // Initial filters for the entity.
  filterKeyValue: ExportFilterKeyExportCategory;
}

export const ExportEntityToTerraForm = ({
  entityFilters,
}: ExportEntityToTerraFormProps): JSX.Element => {
  const { updateExportFilters } = useDetailState();
  const [filters] = useState<Filters>(entityFilters || []);

  // Set export filters with the entity id, and any selected filter categories.
  useEffect(() => {
    updateExportFilters(filters);
  }, [filters, updateExportFilters]);

  return <>{/* Export entity form */}</>;
};