import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

interface WithComponent: < T = React.ReactNode> {
    component?: T;
}

export const ArthenticationGuard: FC<WithComponent> = ({component}) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div> 
                <h1>Loading....</h1>
            </div>
        ),
    })
    return <Component />
}
