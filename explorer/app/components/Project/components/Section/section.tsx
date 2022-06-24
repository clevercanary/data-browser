// Core dependencies
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { ButtonBase, Collapse } from "@mui/material";
import { CollapseProps } from "@mui/material/Collapse/Collapse";
import React, { ReactNode, useEffect, useState } from "react";

// App dependencies
import { SectionTitle } from "./components/SectionTitle/sectionTitle";
import {
  BREAKPOINT,
  BREAKPOINT_FN_NAME,
  useBreakpointHelper,
} from "../../../../hooks/useBreakpointHelper";

// Styles
import { Section as SectionContainer, SectionSummary } from "./section.styles";

interface Props {
  children: ReactNode;
  collapsable?: boolean;
  title: string;
}

export const Section = ({
  children,
  collapsable = false,
  title,
}: Props): JSX.Element => {
  const mobile = useBreakpointHelper(
    BREAKPOINT_FN_NAME.DOWN,
    BREAKPOINT.DESKTOP
  );
  const [expanded, setExpanded] = useState<boolean>(false);
  const [transitionDuration, setTransitionDuration] =
    useState<CollapseProps["timeout"]>(0);
  const disabled = !mobile || !collapsable;
  const ExpandIcon = expanded ? RemoveIcon : AddIcon;

  const onToggleExpanded = () => {
    setExpanded((expanded) => !expanded);
  };

  // Toggles expanded state on change of media breakpoint.
  useEffect(() => {
    setExpanded(!mobile);
  }, [mobile]);

  // Sets collapseTimeout state on change of media breakpoint.
  // Delays setting transitionDuration state for mobile breakpoint to facilitate the immediate transition from
  //  desktop to mobile.
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
    <SectionContainer>
      <SectionSummary disabled={disabled} onClick={onToggleExpanded}>
        <SectionTitle title={title} />
        {!disabled && <ExpandIcon fontSize="small" />}
      </SectionSummary>
      {collapsable ? (
        <Collapse in={expanded} timeout={transitionDuration}>
          {children}
        </Collapse>
      ) : (
        children
      )}
    </SectionContainer>
  );
};
