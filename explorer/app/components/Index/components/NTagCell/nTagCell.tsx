// Core dependencies
import { Chip, ChipProps, Typography } from "@mui/material";
import React from "react";

// App dependencies
import { MetadataValue } from "../../common/entities";
import { stringifyMetadataValues } from "../../common/utils";
import { NTag } from "../NTag/nTag";

// Template constants
const MAX_DISPLAYABLE_VALUES = 1;

interface Props {
  label: string;
  values: MetadataValue[];
}

/**
 * Renders tag for NTag component.
 */
function renderTag(
  label: string,
  count: number,
  chipProps: ChipProps
): JSX.Element {
  return <Chip label={`${count} ${label}`} variant="ntag" {...chipProps} />;
}

export const NTagCell = ({ label, values }: Props): JSX.Element => {
  const metadataCount = values.length;
  const showNTag = metadataCount > MAX_DISPLAYABLE_VALUES;
  return (
    <>
      {showNTag ? (
        <NTag
          TagElType={(props) => renderTag(label, metadataCount, props)}
          PopoverContent={
            <Typography display="block" variant="text-body-small-400">
              {stringifyMetadataValues(values)}
            </Typography>
          }
        />
      ) : (
        values.map((value, v) => <div key={`${value}${v}`}>{value}</div>)
      )}
    </>
  );
};
