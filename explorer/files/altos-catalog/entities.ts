import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Description = MDXRemoteSerializeResult | null;

export type ExperimentTypeKey = keyof typeof EXPERIMENT_TYPE;

export type ExperimentTypeKeyFileName = [ExperimentTypeKey, string];

export enum EXPERIMENT_TYPE {
  PERTURBATIONAL = "Perturbational",
  REPROGRAMMING = "Reprogramming",
}
