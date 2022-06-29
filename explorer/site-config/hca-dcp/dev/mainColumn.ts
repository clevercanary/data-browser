// App dependencies
import * as C from "app/components";
import { ComponentConfig } from "app/config/model";
import { ProjectResponse } from "app/models/responses";
import * as T from "./projectViewModelBuilder";

export const mainColumn = [
  {
    component: C.Description,
    transformer: T.buildDescription,
  } as ComponentConfig<typeof C.Description, ProjectResponse>,
  {
    component: C.Contacts,
    transformer: T.buildContacts,
  } as ComponentConfig<typeof C.Contacts, ProjectResponse>,
  {
    component: C.Contributors,
    transformer: T.buildContributors,
  } as ComponentConfig<typeof C.Contributors, ProjectResponse>,
  {
    children: [
      {
        component: C.Citations,
        transformer: T.projectsToOrganizations,
      } as ComponentConfig<typeof C.Citations, ProjectResponse>,
    ],
    component: C.Section,
    props: {
      title: "Collaborating Organizations",
    },
  } as ComponentConfig<typeof C.Section, ProjectResponse>,
  {
    children: [
      {
        component: C.TextLinks,
        transformer: T.projectsToDataCurators,
      } as ComponentConfig<typeof C.TextLinks, ProjectResponse>,
    ],
    component: C.Section,
    props: {
      title: "Data Curators",
    },
  } as ComponentConfig<typeof C.Section, ProjectResponse>,
  {
    component: C.Citation,
    transformer: T.buildCitation,
  } as ComponentConfig<typeof C.Citation, ProjectResponse>,
  {
    component: C.SupplementaryLinks,
    transformer: T.buildSupplementaryLinks,
  } as ComponentConfig<typeof C.SupplementaryLinks>,
  {
    children: [
      {
        component: C.TextLinks,
        transformer: T.projectsToAccessions,
      } as ComponentConfig<typeof C.TextLinks>,
    ],
    component: C.Section,
    props: {
      title: "Accessions",
    },
  } as ComponentConfig<typeof C.Section, ProjectResponse>,
  {
    component: C.DataReleasePolicy,
  } as ComponentConfig<typeof C.DataReleasePolicy>,
];
