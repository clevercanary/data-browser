import { TagWarning } from "@clevercanary/data-explorer-ui/lib/components/common/Tag/tag.styles";
import { Link, Typography } from "@mui/material";
import NLink from "next/link";
import React from "react";

export const BatchNormalizationWarning = ({
  ...props /* Spread props to allow for Typography specific props TypographyProps e.g. "gutterBottom" or "noWrap". */
}): JSX.Element => {
  return (
    <Typography component="div" variant="text-body-400-2lines" {...props}>
      <TagWarning>Please note</TagWarning> Data normalization and batch
      correction may differ between projects and processing methods. For details
      see{" "}
      <NLink href={""} passHref>
        <Link>Matrix Normalization and Batch Correction</Link>
      </NLink>
      .
    </Typography>
  );
};
