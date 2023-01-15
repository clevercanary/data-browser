export type ExperimentTypeKey = keyof typeof EXPERIMENT_TYPE;

export type ExperimentTypeKeyFileName = [ExperimentTypeKey, string];

export enum EXPERIMENT_TYPE {
  PERTURBATIONAL = "Perturbational",
  REPROGRAMMING = "Reprogramming",
}
