import React, { useContext } from "react";
import { AuthContext } from "../../common/context/authState";

export const LoginPage = (): JSX.Element => {
  const { authorizeUser } = useContext(AuthContext);

  return (
    <div>
      <button onClick={(): void => authorizeUser()}>Login with Google</button>
    </div>
  );
};
//  const [user, setUser] = useState({});
//   const [oAuthClient, setOAuthClient] = useState({});
//
//   function handleCallbackResponse(response) {
//     console.log("google says:" + response.credential);
//     var userObject = jwt_decode(response.credential);
//     console.log(userObject);
//     setUser(userObject);
//     document.getElementById("signInDiv").hidden = true;
//   }
//
//   function handleSignOut(event) {
//     setUser({});
//     document.getElementById("signInDiv").hidden = false;
//   }
//
//   useEffect(() => {
//     // eslint-disable-next-line eslint-comments/require-description
//     /* global google */
//     google.accounts.id.initialize({
//       callback: handleCallbackResponse,
//       client_id: CLIENT_ID,
//     });
//
//     google.accounts.id.renderButton(document.getElementById("signInDiv"), {
//       size: "large",
//       theme: "outline",
//     });
//
//     setOAuthClient(
//       google.accounts.oauth2.initTokenClient({
//         client_id: CLIENT_ID,
//         scope: SCOPES,
//         callback: (tokenResponse) => {
//           console.log(tokenResponse);
//
//           const myHeaders = new Headers();
//           myHeaders.append(
//             "authorization",
//             "Bearer " + tokenResponse.access_token
//           );
//
//           const options = {
//             headers: myHeaders,
//           };
//
//           fetch(
//             "https://sam.dsde-prod.broadinstitute.org/register/user/v1",
//             options
//           )
//             .then((response) => response.json())
//             .then((data) => console.log("Terra Sam Says:", data));
//
//           const myHeaders2 = new Headers();
//           myHeaders2.append(
//             "authorization",
//             "Bearer " + tokenResponse.access_token
//           );
//
//           const options2 = {
//             headers: myHeaders2,
//           };
//
//           fetch(
//             "https://service.nadove4.anvil.gi.ucsc.edu/index/summary?catalog=anvil-cmg",
//             options2
//           )
//             .then((response) => response.json())
//             .then((data) => console.log("Azul CMG Says:", data));
//
//           fetch("https://www.googleapis.com/oauth2/v3/userinfo", options2)
//             .then((response) => response.json())
//             .then((data) => console.log("Google USER INFO Says:", data));
//         },
//       })
//     );
//
//     //google.accounts.id.prompt();
//   }, []);
