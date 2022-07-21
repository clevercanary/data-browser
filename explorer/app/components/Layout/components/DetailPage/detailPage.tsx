/**
 * DetailPage component will hold page's structure, header, content and footer.
 * Header and Footer will be configurable through props.
 * DetailPage component will also handle the presentation of the ErrorPage if receives a ErrorCode
 */

// Core dependencies
import React from "react";
import { NextPage } from "next";
import ErrorPage from "next/error";

// App dependencies
import { Page } from "../Page/page";
import { getCurrentEntity } from "app/hooks/useCurrentEntity";
import { config } from "app/config/config";

export interface DetailPageProps {
  errorCode?: number;
  children: React.ReactNode | React.ReactNode[];
  slug: string;
}

export const DetailPage: NextPage<DetailPageProps> = ({
  children,
  slug,
  errorCode,
}: DetailPageProps) => {
  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }
  const entity = getCurrentEntity(slug, config());
  return <Page entity={entity}>{children}</Page>;
};
