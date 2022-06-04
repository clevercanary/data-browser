import { Contacts } from "./../../../app/components/Contacts/Contacts";
import { ShowMore } from "./../../../app/components/ShowMore/ShowMore";
import { ComponentObject, SiteConfig } from "../../../app/config/model";
import HcaLogo from "images/hca-logo.png";
import {
  projectListToView,
  filesListToView,
  samplesListToView,
  projectDetailToView,
  fileDetailToView,
  sampleDetailToView,
  getProjectId,
} from "app/transformers/hca";
import * as C from "../../../app/components";
import { ComponentMeta } from "@storybook/react";
import { ProjectResponse } from "app/models/responses";

const config: SiteConfig = {
  redirectRootToPath: "/explore/projects",
  datasources: {
    catalog: "dcp2",
    url: "https://service.dev.singlecell.gi.ucsc.edu/",
  },
  entities: [
    {
      label: "Projects",
      apiPath: "index/projects",
      route: "projects",
      listTransformer: projectListToView,
      detailTransformer: projectDetailToView,
      getId: getProjectId,
      // staticLoad: true,
    },
    {
      label: "Files",
      apiPath: "index/files",
      route: "files",
      listTransformer: filesListToView,
      detailTransformer: fileDetailToView,
    },
    {
      label: "Samples",
      apiPath: "index/samples",
      route: "samples",
      listTransformer: samplesListToView,
      detailTransformer: sampleDetailToView,
    },
  ],
  layout: {
    header: {
      logo: {
        url: HcaLogo,
        alt: "Human Cell Atlas Data Coordination Platform",
      },
      navLinks: {
        links: [
          {
            label: "Explore",
            url: "https://data.humancellatlas.org/explore/projects",
          },
          {
            label: "Guides",
            url: "https://data.humancellatlas.org/guides",
          },
          {
            label: "Metadata",
            url: "https://data.humancellatlas.org/metadata",
          },
          {
            label: "Pipelines",
            url: "https://data.humancellatlas.org/pipelines",
          },
          {
            label: "Analysis Tools",
            url: "https://data.humancellatlas.org/analyze",
          },
          {
            label: "Contribute",
            url: "https://data.humancellatlas.org/contribute",
          },
          {
            label: "APIs",
            url: "https://data.humancellatlas.org/apis",
          },
          {
            label: "Updates",
            url: "https://data.humancellatlas.org/dcp-updates",
          },
        ],
      },
      socialLinks: {
        links: [
          {
            type: "twitter",
            url: "https://twitter.com/humancellatlas",
          },
          {
            type: "github",
            url: "https://github.com/HumanCellAtlas",
          },
          {
            type: "slack",
            url: "https://humancellatlas.slack.com/archives/C02TM2SDVM2",
          },
        ],
      },
      navAlignment: "left",
      searchEnabled: false,
      authenticationEnabled: false,
    },
  },
  detail: {
    components: [
      // {
      //   component: "showMore",
      //   props: {
      //     args: {
      //       children: "<p>testing</p>",
      //     },
      //   } as ComponentMeta<typeof C.ShowMore>,
      // },
      {
        component: "citations",
        props: {
          args: {
            citations: [
              {
                value: "tedasdads",
                citation: "1",
              },
            ],
            // contacts: [
            //   {
            //     name: "name",
            //     email: "email",
            //     institution: "institution",
            //   },
            // ],
          },
        },
      } as ComponentObject<typeof C.Citations>,
      {
        component: "contacts",
        transformer: (d) => {
          const project = d as ProjectResponse;
          return {
            args: {
              contacts: [
                {
                  name: project?.projects[0].projectShortname,
                  email: project?.projects[0].projectTitle,
                },
              ],
            },
          };
        },
      } as ComponentObject<typeof C.Contacts>,
    ],
  },
};

export default config;
