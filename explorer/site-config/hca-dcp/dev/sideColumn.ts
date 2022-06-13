import { ComponentObject } from "app/config/model";
import * as C from "../../../app/components";
import * as T from "./transformer";
import { ProjectResponse } from "app/models/responses";

export const sideColumn = [
  {
    component: C.Stack,
    props: {
      border: true,
    },
    children: [
      {
        component: C.Section,
        props: {
          title: "Analysis Portals",
        },
        children: [
          {
            component: C.IconList,
            transformer: T.projectsToAnalysisPortals,
          } as ComponentObject<typeof C.IconList, ProjectResponse>,
        ],
      } as ComponentObject<typeof C.Section>,
      {
        component: C.Section,
        props: {
          title: "Project Details",
        },
        children: [
          {
            component: C.Stack,
            props: {
              gap: 4,
            },
            children: [
              {
                component: C.LabelValue,
                transformer: T.projectsToProjectLabel,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToSpecies,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToSampleType,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToAnatomicalEntity,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToOrganPart,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToDiseaseSpecimen,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToDiseaseDonor,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToDevelopmentStage,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToLibConstMethod,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToNucleicAcidSrc,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToPairedEnd,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToAnalysisProtocol,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToFileFormat,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToCellCount,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
              {
                component: C.LabelValue,
                transformer: T.projectsToDonorCount,
              } as ComponentObject<typeof C.LabelValue, ProjectResponse>,
            ],
          } as ComponentObject<typeof C.Stack>,
        ],
      } as ComponentObject<typeof C.Section>,
      {
        component: C.Section,
        props: {
          title: "File Counts",
        },
        children: [
          {
            component: C.FileCounts,
            transformer: T.projectsToFileCounts,
          } as ComponentObject<typeof C.FileCounts, ProjectResponse>,
        ],
      } as ComponentObject<typeof C.Section>,
    ],
  } as ComponentObject<typeof C.Stack>,
];
