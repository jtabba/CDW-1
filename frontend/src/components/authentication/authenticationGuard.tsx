import React, { ComponentType } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Spinner } from '@chakra-ui/react'

interface ComponentProps {
    componentAsProps: ComponentType<object>
}


export const AuthenticationGuard: React.FC<ComponentProps> = ({componentAsProps}) => {
    const Component = withAuthenticationRequired(componentAsProps, {
        onRedirecting: ()=> (
            <div className="page-layout">
               <Spinner />
            </div>
        )
    })
    return <Component />
    
}

