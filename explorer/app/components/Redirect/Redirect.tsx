import React, { useEffect } from "react";
import { useRouter } from "next/router";

interface RedirectProps {
  destination: string;
  replace?: boolean;
}

export const Redirect = ({
  destination,
  replace,
}: RedirectProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    replace ? router.replace(destination) : router.push(destination);
  }, [destination, replace, router]);

  return <></>;
};
