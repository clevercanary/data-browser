import { SectionContent as Content } from "../Section/section.styles";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const SectionContent = styled(Content)`
  gap: 0;

  > p {
    margin: 0 0 8px;
  }

  > *:last-child {
    margin-bottom: 0;
  }
` as typeof Typography;
