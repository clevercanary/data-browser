import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  profileImage?: string;
}

export const ProfileImage = styled.div<Props>`
  height: 32px;
  width: 32px;

  ${({ profileImage, theme }) => {
    return profileImage
      ? css`
          background: no-repeat url(${profileImage});
          background-size: cover;
        `
      : css`
          background-color: ${theme.palette.smoke.main};
          border-radius: 50%;
        `;
  }};
`;
