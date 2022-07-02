// Core dependencies
import { Typography } from "@mui/material";
import React, { Fragment } from "react";

// App dependencies
import {
  Key,
  KeyValuePairs,
  KeyValues,
} from "../../../common/KeyValuePairs/keyValuePairs";
import { Stack } from "../../../common/Stack/Stack";
import { SectionDetailsEmpty } from "../Section/components/SectionDetailsEmpty/sectionDetailsEmpty";
import { Section } from "../Section/section";

interface Props {
  keyValuePairs?: KeyValues;
}

/**
 * Wrapper element around the key.
 * @param props - Key component children.
 * @returns typography component with color "inkLight".
 */
function renderKey(props: { children: Key }): JSX.Element {
  return <Typography color="inkLight">{props.children}</Typography>;
}

export const Details = ({ keyValuePairs }: Props): JSX.Element => {
  return (
    <Section collapsable title="Project Details">
      {keyValuePairs ? (
        <KeyValuePairs
          KeyElType={renderKey}
          keyValuePairs={keyValuePairs}
          KeyValuesElType={Fragment}
          KeyValueElType={Stack}
        />
      ) : (
        <SectionDetailsEmpty />
      )}
    </Section>
  );
};