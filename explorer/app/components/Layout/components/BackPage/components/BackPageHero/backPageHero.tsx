/**
 * Back page hero component comprising breadcrumbs, title, status and tabs.
 */

import {
  Breadcrumb,
  Breadcrumbs,
} from "@clevercanary/data-explorer-ui/lib/components/common/Breadcrumbs/breadcrumbs";
import { CallToAction } from "@clevercanary/data-explorer-ui/lib/components/common/Button/components/CallToActionButton/callToActionButton";
import { Stack } from "@clevercanary/data-explorer-ui/lib/components/common/Stack/stack";
import {
  Status,
  StatusBadge,
} from "@clevercanary/data-explorer-ui/lib/components/common/StatusBadge/statusBadge";
import {
  HeroTitle,
  Title,
} from "@clevercanary/data-explorer-ui/lib/components/common/Title/title";
import React, { Fragment } from "react";
import {
  BackPageHeroHeadline,
  CallToActionButton,
  HeroHeader,
} from "./backPageHero.styles";

interface Props {
  breadcrumbs?: Breadcrumb[];
  callToAction?: CallToAction;
  status?: Status;
  title?: HeroTitle;
}

export const BackPageHero = ({
  breadcrumbs,
  callToAction,
  status,
  title,
}: Props): JSX.Element => {
  const HeroHeadline = callToAction ? BackPageHeroHeadline : Fragment;
  return (
    <>
      {(breadcrumbs || title) && (
        <HeroHeadline>
          <HeroHeader gap={1}>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {title && <Title title={title} />}
          </HeroHeader>
          {callToAction && (
            <CallToActionButton
              callToAction={callToAction}
              row={status ? 3 : 2}
            />
          )}
        </HeroHeadline>
      )}
      {status && (
        <Stack direction="row" gap={4}>
          <StatusBadge status={status} />
        </Stack>
      )}
    </>
  );
};
