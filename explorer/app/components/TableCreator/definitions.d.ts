import { RowData } from "@tanstack/react-table";
import { GridTrackSize } from "../../config/common/entities";

declare module "@tanstack/table-core" {
  interface ColumnMeta<TData extends RowData, TValue> {
    width: GridTrackSize;
  }
}
