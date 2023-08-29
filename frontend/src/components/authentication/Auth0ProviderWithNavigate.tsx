import { AppState, User, Auth0Provider } from "@auth0/auth0-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { WithChildren } from "../../theme/requests/types";
// Make a component that accepts children. 
    
const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN!;
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID!;
const REDIRECT_URI = process.env.REACT_APP_AUTH0_CALLBACK_URL!;

export const Auth0ProviderWithNavigate: FC<WithChildren> = ({ children }) => {
    const navigate = useNavigate()



    const onRedirectCallback: (appState?: AppState | undefined, user?: User | undefined) => void = (
        appState?: AppState,
        user?: User
    ) => {
        navigate(appState?.returnTo || window.location.pathname);
    };
    
   
    if(!(DOMAIN && CLIENT_ID && REDIRECT_URI)){
    return null
}

return (
    <Auth0Provider
        domain={DOMAIN}
        clientId={CLIENT_ID}
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
        onRedirectCallback={onRedirectCallback}
    >
        {children}
    </Auth0Provider>
)
}


