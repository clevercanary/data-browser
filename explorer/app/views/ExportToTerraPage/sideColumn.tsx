import { FluidPaper } from "app/components/common/Paper/paper.styles";
import React from "react";
import { DataReleasePolicy } from "../../components";

export const SideColumn = (): JSX.Element => {
  return (
    <FluidPaper>
      <DataReleasePolicy />
    </FluidPaper>
  );
};
