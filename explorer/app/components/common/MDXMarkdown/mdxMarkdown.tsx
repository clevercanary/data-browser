import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";
import { SectionDetailsEmpty } from "../../Detail/components/Section/components/SectionDetailsEmpty/sectionDetailsEmpty";

interface Props {
  fallbackText?: string; // Text to display when source is absent of a serialized result.
  source: MDXRemoteSerializeResult | null;
}

const components = {};

export const MdxMarkdown = ({ fallbackText, source }: Props): JSX.Element => {
  return source ? (
    <MDXRemote {...source} components={components}></MDXRemote>
  ) : (
    <SectionDetailsEmpty displayText={fallbackText} />
  );
};
