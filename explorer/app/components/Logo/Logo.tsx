import { Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import React from "react";
import { StaticImage } from "../StaticImage";
import { Container, SloganContainer } from "./Logo.styles";

export interface LogoProps {
  url: StaticImageData;
  slogan?: string;
  width?: number;
  height?: number;
  alt: string;
}

export const Logo: React.FC<LogoProps> = ({
  url,
  slogan,
  width,
  height,
  alt,
}: LogoProps) => {
  return (
    <Container>
      <StaticImage src={url} alt={alt} width={width} height={height} />
      {slogan && (
        <SloganContainer>
          <Typography
            color={(theme) => theme.palette.colorInk}
            component="span"
            fontSize={12}
            lineHeight="18px"
          >
            {slogan}
          </Typography>
        </SloganContainer>
      )}
    </Container>
  );
};
