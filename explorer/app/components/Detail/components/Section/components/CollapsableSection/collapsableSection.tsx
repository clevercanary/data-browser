import {
  BREAKPOINT_FN_NAME,
  useBreakpointHelper,
} from "@clevercanary/data-explorer-ui/lib/hooks/useBreakpointHelper";
import { TABLET } from "@clevercanary/data-explorer-ui/lib/theme/common/breakpoints";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { Collapse } from "@mui/material";
import { CollapseProps } from "@mui/material/Collapse/Collapse";
import React, { ReactNode, useEffect, useState } from "react";
import { SectionTitle } from "../SectionTitle/sectionTitle";
import {
  CollapsableSection as Section,
  SectionSummary,
  SectionText,
} from "./collapsableSection.styles";

interface Props {
  children: ReactNode;
  collapsable?: boolean;
  title: string;
}

export const CollapsableSection = ({
  children,
  collapsable = false,
  title,
}: Props): JSX.Element => {
  const mobile = useBreakpointHelper(BREAKPOINT_FN_NAME.DOWN, TABLET);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [transitionDuration, setTransitionDuration] =
    useState<CollapseProps["timeout"]>(0);
  const disabled = !mobile || !collapsable;
  const ExpandIcon = expanded ? RemoveRoundedIcon : AddRoundedIcon;
  const SectionContent = (
    <SectionText component="div" variant="text-body-400-2lines">
      {children}
    </SectionText>
  );

  const onToggleExpanded = (): void => {
    setExpanded((expanded) => !expanded);
  };

  // Toggles expanded state on change of media breakpoint.
  useEffect(() => {
    setExpanded(!mobile);
  }, [mobile]);

  // Sets collapseTimeout state on change of media breakpoint.
  // Delays setting transitionDuration state for mobile breakpoint to facilitate the immediate transition from
  // tablet to mobile.
  useEffect(() => {
    if (mobile) {
      const duration = setTimeout(() => {
        setTransitionDuration("auto");
      }, 100);
      return () => {
        clearTimeout(duration);
      };
    } else {
      setTransitionDuration(0);
    }
  }, [mobile]);

  return (
    <Section>
      <SectionSummary disabled={disabled} onClick={onToggleExpanded}>
        <SectionTitle title={title} />
        {!disabled && <ExpandIcon fontSize="small" />}
      </SectionSummary>
      {!disabled ? (
        <Collapse in={expanded} timeout={transitionDuration}>
          {SectionContent}
        </Collapse>
      ) : (
        SectionContent
      )}
    </Section>
  );
};
