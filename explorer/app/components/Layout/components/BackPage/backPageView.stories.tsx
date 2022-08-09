// Core dependencies
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// App dependencies
import { BackPageView } from "./backPageView";
import { ProjectCitation } from "./components/Citation/citation.stories";
import { ProjectCollaboratingOrganizations } from "./components/CollaboratingOrganizations/collaboratingOrganizations.stories";
import { ProjectContacts } from "./components/Contacts/contacts.stories";
import { ProjectContributors } from "./components/Contributors/contributors.stories";
import { ProjectDataCurators } from "./components/DataCurators/dataCurators.stories";
import { ProjectDataReleasePolicy } from "./components/DataReleasePolicy/dataReleasePolicy.stories";
import { ProjectDescription } from "./components/Description/description.stories";
import { ProjectDetails } from "./components/Details/details.stories";
import { ProjectHero } from "./components/Hero/hero.stories";
import { ProjectPublications } from "./components/Publications/publications.stories";
import { ProjectSupplementaryLinks } from "./components/SupplementaryLinks/supplementaryLinks.stories";

export default {
  argTypes: {
    mainColumn: { table: { disable: true } },
    sideColumn: { table: { disable: true } },
    top: { table: { disable: true } },
  },
  component: BackPageView,
  title: "Views/BackPage",
} as ComponentMeta<typeof BackPageView>;

const Template: ComponentStory<typeof BackPageView> = (args) => (
  <BackPageView {...args} />
);

export const Project = Template.bind({});
Project.args = {
  mainColumn: (
    <>
      <ProjectDescription
        projectDescription={
          ProjectDescription.args?.projectDescription || "None"
        }
      />
      <ProjectContacts {...ProjectContacts.args} />
      <ProjectPublications {...ProjectPublications.args} />
      <ProjectContributors {...ProjectContributors.args} />
      <ProjectCollaboratingOrganizations
        {...ProjectCollaboratingOrganizations.args}
      />
      <ProjectDataCurators {...ProjectDataCurators.args} />
      <ProjectCitation {...ProjectCitation.args} />
      <ProjectSupplementaryLinks {...ProjectSupplementaryLinks.args} />
      <ProjectDataReleasePolicy />
    </>
  ),
  sideColumn: (
    <>
      <ProjectDetails {...ProjectDetails.args} />
    </>
  ),
  top: (
    <>
      <ProjectHero {...ProjectHero.args} />
    </>
  ),
};
