import { config } from "app/config/config";
import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { GoogleGISAuthConfig } from "../../config/common/entities";

type AuthorizeUserFn = () => void;
// eslint-disable-next-line  @typescript-eslint/no-explicit-any -- see todo
declare const google: any; // TODO see https://github.com/clevercanary/data-browser/issues/544.
const authConfig = config().authConfig;

/**
 * Model of token response.
 */
interface TokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
  token_type: string;
}

/**
 * Model of user profile.
 */
export interface UserProfile {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  hd: string;
  locale: string;
  name: string;
  picture: string;
  sub: string;
}

/**
 * Model of authentication context.
 */
interface IAuthContext {
  authorizeUser: AuthorizeUserFn;
  isAuthorized: boolean;
  token?: string;
  userProfile?: UserProfile;
}

/**
 * Auth context for storing and using auth-related state.
 */
export const AuthContext = createContext<IAuthContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function -- allow dummy function for default state.
  authorizeUser: () => {},
  isAuthorized: false,
  token: undefined,
  userProfile: undefined,
});

interface Props {
  authConfig: GoogleGISAuthConfig;
  children: ReactNode | ReactNode[];
}

/**
 * Auth provider for consuming components to subscribe to changes in auth-related state.
 * @param props - Component inputs.
 * @param props.children - Set of children components that can possibly consume the query provider.
 * @param props.authConfig - TODO
 * @returns Provider element to be used by consumers to both update authentication state and subscribe to changes in authentication state.
 */
export function AuthProvider({ authConfig, children }: Props): JSX.Element {
  const { clientId, scope } = authConfig || {};
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [hasTerraAccount, setHasTerraAccount] = useState<boolean>(false);
  const [token, setToken] = useState<string>();
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any -- see todo
  const [tokenClient, setTokenClient] = useState<any>(); // TODO see https://github.com/clevercanary/data-browser/issues/544.
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const router = useRouter();
  /**
   * Requests access token and authorizes user.
   */
  const authorizeUser = (): void => {
    tokenClient.requestAccessToken();
  };

  /**
   * Fetches user profile from Google APIS.
   * @param accessToken - Token client access token.
   */
  const fetchGoogleProfile = (accessToken?: string): void => {
    if (accessToken) {
      const headers = new Headers();
      headers.append("authorization", "Bearer " + accessToken);
      const options = { headers };
      fetch(authConfig.googleProfileEndpoint, options)
        .then((response) => response.json())
        .then((profile) => {
          setUserProfile(profile);
          setIsAuthorized(true);
        })
        .catch((err) => {
          console.log(err);
          setUserProfile(undefined);
          setIsAuthorized(false);
        }); // TODO Auth  - handle error.
    }
  };

  /**
   * Fetches user profile from Google APIS.
   * @param accessToken - Token client access token.
   */
  const fetchTerraProfile = (accessToken?: string): void => {
    if (accessToken) {
      const headers = new Headers();
      headers.append("authorization", "Bearer " + accessToken);
      const options = { headers };
      //TODO Auth Configure URL
      fetch(authConfig.terraProfileEndpoint, options)
        .then((response) => response.json())
        .then((profile) => {
          if (profile?.enabled?.google) {
            setHasTerraAccount(true);
          } else {
            setHasTerraAccount(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setHasTerraAccount(false);
        }); // TODO Auth  - handle error.
    }
  };

  // Initializes token client - (authorization client id must be configured).
  useEffect(() => {
    if (clientId) {
      setTokenClient(
        // TODO typescript global google variable.
        google.accounts.oauth2.initTokenClient({
          callback: (tokenResponse: TokenResponse) => {
            const access_token = tokenResponse.access_token;
            setToken(access_token);
          },
          client_id: clientId,
          scope,
        })
      );
    }
  }, [clientId, scope]);

  // Fetches user profile and sets userProfile state when token is retrieved.
  useEffect(() => {
    fetchGoogleProfile(token);
  }, [token]);

  // Fetches user profile and sets userProfile state when token is retrieved.
  useEffect(() => {
    fetchTerraProfile(token);
  }, [token]);

  // Fetches user profile and sets userProfile state when token is retrieved.
  useEffect(() => {
    if (isAuthorized) {
      // navigate to to the explore page
      router.push("/datasets");
    }
  }, [isAuthorized]);

  return (
    <AuthContext.Provider
      value={{ authorizeUser, isAuthorized, token, userProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}
