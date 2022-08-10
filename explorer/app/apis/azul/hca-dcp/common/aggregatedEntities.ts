export interface AggregateProject {
  estimatedCellCount?: number;
  projectTitle: string[];
}

export interface AggregateProjectResponse {
  projects: AggregateProject[];
}
