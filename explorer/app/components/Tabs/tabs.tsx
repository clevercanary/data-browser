import { Box, Tabs as MuiTabs, Tab } from "@mui/material";
import React, { useState } from "react";
import { TabPanel } from "./tabPanel";

interface TabsProps {
  tabs: {
    label: string;
    component: React.ReactNode;
    selected?: boolean;
  }[];
}

export const Tabs = ({ tabs }: TabsProps): JSX.Element => {
  const defaultTabIndex = tabs.findIndex((tab) => !!tab.selected);
  const [tabIndex, setTabIndex] = useState(defaultTabIndex ?? 0);

  const handleChange = (_: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <MuiTabs onChange={handleChange} value={tabIndex}>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </MuiTabs>
      </Box>
      <Box>
        {tabs.map((tab, index) => (
          <TabPanel key={index} index={index} value={tabIndex}>
            {tab.component}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};
