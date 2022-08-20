import { Typography } from "@mui/material";
import React from "react";
import { Section } from "../../../Detail/components/Section/section";
import { Description as ProjectDescription } from "../../common/entities";

interface Props {
  projectDescription: ProjectDescription;
}

export const Description = ({ projectDescription }: Props): JSX.Element => {
  return (
    <Section title={"Description"}>
      <Typography>{projectDescription}</Typography>
    </Section>
  );
};
