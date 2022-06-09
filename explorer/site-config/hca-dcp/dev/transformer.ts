import React from "react";
import { ProjectResponse } from "app/models/responses";
import * as C from "../../../app/components";

export const projectToContacts = (
  project: ProjectResponse
): React.ComponentProps<typeof C.Contacts> => {
  if (!project) {
    return { contacts: [] };
  }

  return {
    contacts: [
      {
        name: project.projects[0].projectShortname,
        email: project.projects[0].projectTitle,
      },
    ],
  };
};
