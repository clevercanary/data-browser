import React, { Fragment } from "react";

interface Props {
  label: string;
}

export const LinkLabel = ({ label }: Props): JSX.Element => {
  const url = new URL(label);
  const urlPathname = url.pathname.slice(1);
  const pathNames = urlPathname ? urlPathname.split(/\//) : [];
  return (
    <>
      {url.origin}
      {pathNames.length > 0 &&
        pathNames.map((pathName, i) => (
          <Fragment key={`${pathName}${i}`}>
            /
            <wbr />
            {pathName}
          </Fragment>
        ))}
    </>
  );
};
