import { CollapsableSection } from "@clevercanary/data-explorer-ui/lib/components/common/Section/components/CollapsableSection/collapsableSection";
import { Link as PolicyLink, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export const DataReleasePolicy = (): JSX.Element => {
  return (
    <CollapsableSection title="Data Access Policy">
      <Typography>
        For information regarding data sharing and data use, please see our{" "}
        <Link href="https://anvilproject.org/faq/data-security/" passHref>
          <PolicyLink target="_blank">Data Access Policy</PolicyLink>
        </Link>
        .
      </Typography>
    </CollapsableSection>
  );
};
