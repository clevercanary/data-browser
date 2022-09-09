import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { GoogleGISAuthConfig } from "../../config/common/entities";

type AuthorizeUserFn = () => void;
// eslint-disable-next-line  @typescript-eslint/no-explicit-any -- see todo
declare const google: any; // TODO see https://github.com/clevercanary/data-browser/issues/544.

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
  authConfig?: GoogleGISAuthConfig;
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
  const [hasTerraAccount, setHasTerraAccount] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [token, setToken] = useState<string>();
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any -- see todo
  const [tokenClient, setTokenClient] = useState<any>(); // TODO see https://github.com/clevercanary/data-browser/issues/544.
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const router = useRouter();

  /**
   * Requests access token and authorizes user.
   */
  const authorizeUser = useCallback((): void => {
    tokenClient.requestAccessToken();
  }, [tokenClient]);

  /**
   * Fetches google user profile from Google APIS.
   * @param accessToken - Token client access token.
   */
  const fetchGoogleProfile = useCallback(
    (endpoint: string, accessToken: string): void => {
      const headers = new Headers();
      headers.append("authorization", "Bearer " + accessToken);
      const options = { headers };
      fetch(endpoint, options)
        .then((response) => response.json())
        .then((profile) => {
          setUserProfile(profile);
          setIsAuthorized(true);
        })
        .catch((err) => {
          console.log(err); // TODO handle error.
          setUserProfile(undefined);
          setIsAuthorized(false);
        });
    },
    []
  );

  /**
   * Fetches terra user profile from Google APIS.
   * @param accessToken - Token client access token.
   */
  const fetchTerraProfile = useCallback(
    (endpoint: string, accessToken: string): void => {
      const headers = new Headers();
      headers.append("authorization", "Bearer " + accessToken);
      const options = { headers };
      //TODO Auth Configure URL
      fetch(endpoint, options)
        .then((response) => response.json())
        .then((profile) => {
          if (profile?.enabled?.google) {
            setHasTerraAccount(true);
          } else {
            setHasTerraAccount(false);
          }
        })
        .catch((err) => {
          console.log(err); // TODO handle error.
          setHasTerraAccount(false);
        });
    },
    []
  );

  // Initializes token client - (authorization client id must be configured).
  useEffect(() => {
    if (clientId) {
      setTokenClient(
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
    if (authConfig && token) {
      fetchGoogleProfile(authConfig.googleProfileEndpoint, token);
      fetchTerraProfile(authConfig.terraProfileEndpoint, token);
    }
  }, [authConfig, fetchGoogleProfile, fetchTerraProfile, token]);

  // Navigates to the explore page with successful authorization.
  useEffect(() => {
    if (isAuthorized) {
      router.push("/datasets");
    }
  }, [isAuthorized, router]);

  return (
    <AuthContext.Provider
      value={{ authorizeUser, isAuthorized, token, userProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}
