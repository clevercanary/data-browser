// Core dependencies
import { NextPage, NextPageContext } from "next";

// App dependencies
import { DetailPageModel } from "app/models/viewModels";
import { config } from "../../app/config/config";
import { hasEntity } from "../../app/hooks/useCurrentEntity";
import { PATHNAME_INDEX_SLUG } from "app/shared/constants";

/**
 * HOC used to include the getInitialProps static function to a NextPage component.
 * @param page - which will receive the static function
 * @returns @param page
 */
export const withNonStacticDetail = <P extends DetailPageModel>(
  page: NextPage<P>
): NextPage<P> => {
  page.getInitialProps = async (ctx: NextPageContext): Promise<P> => {
    const slug = ctx.pathname.split("/")[PATHNAME_INDEX_SLUG];
    const containsEntity = hasEntity(slug, config());

    return {
      errorCode: containsEntity ? undefined : 404,
      slug,
    } as P;
  };

  return page;
};
