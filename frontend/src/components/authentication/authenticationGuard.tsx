import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

interface ComponentProps {
    componentAsProps: () => React.ReactNode
}


export const AuthenticationGuard: React.FC<ComponentProps> = ({componentAsProps}) => {
    const Component = withAuthenticationRequired(componentAsProps, {
        onRedirecting: ()=> (
            <div className="page-layout">
               <h1>Loading....</h1>
            </div>
        )
    })
    return <Component />
    
}

// interface ComponentProps {
//     componentAsProps: () => React.ReactNode
// }
// export const AuthenticationGuard: React.FC<ComponentProps> = ({componentAsProps}) => {
//     const Component = withAuthenticationRequired(componentAsProps, {
//         onRedirecting: ()=> (
//             <div className="page-layout">
//                 <PageLoader />
//             </div>
//         )
//     })
//     return <Component />
// }