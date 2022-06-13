import { ComponentObject } from "app/config/model";
import * as C from "../../../app/components";
import * as T from "./transformer";
import { ProjectResponse } from "app/models/responses";

export const mainColumn = [
  {
    component: C.Stack,
    props: {
      border: true,
    },
    children: [
      {
        component: C.Section,
        props: {
          title: "Project description",
        },
        children: [
          {
            component: C.ShowMore,
            props: {
              maxLines: 6,
              buttonLabelShow: "Read More",
            },
            children: [
              {
                component: C.Text,
                transformer: T.projectsToProjDescription,
              } as ComponentObject<typeof C.Text, ProjectResponse>,
            ],
          } as ComponentObject<typeof C.ShowMore, ProjectResponse>,
        ],
      } as ComponentObject<typeof C.Section, ProjectResponse>,
      {
        component: C.Section,
        props: {
          title: "Contacts",
        },
        children: [
          {
            component: C.Contacts,
            transformer: T.projectToContacts,
          } as ComponentObject<typeof C.Contacts, ProjectResponse>,
        ],
      } as ComponentObject<typeof C.Section, ProjectResponse>,
      {
        component: C.Section,
        props: {
          title: "Contributors",
        },
        children: [
          {
            component: C.Citations,
            transformer: T.projectsToContributors,
          } as ComponentObject<typeof C.Citations, ProjectResponse>,
        ],
      } as ComponentObject<typeof C.Section, ProjectResponse>,
      {
        component: C.Section,
        props: {
          title: "Collaborating Organizations",
        },
        children: [
          {
            component: C.Citations,
            transformer: T.projectsToOrganizations,
          } as ComponentObject<typeof C.Citations, ProjectResponse>,
        ],
      } as ComponentObject<typeof C.Section, ProjectResponse>,
      {
        component: C.Section,
        props: {
          title: "Data Curators",
        },
        children: [
          {
            component: C.TextLinks,
            transformer: T.projectsToDataCurators,
          } as ComponentObject<typeof C.TextLinks, ProjectResponse>,
        ],
      } as ComponentObject<typeof C.Section, ProjectResponse>,
    ],
  } as ComponentObject<typeof C.Stack, ProjectResponse>,
];
