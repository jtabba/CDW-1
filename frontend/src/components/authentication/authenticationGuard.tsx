import React, { ComponentType, ReactNode } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Spinner, Box } from '@chakra-ui/react'

interface GuardProps {
    component: any
}


export const AuthenticationGuard: React.FC<GuardProps> = ({component}) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: ()=> (
            <Box className="page-layout">
               <Spinner />
            </Box>
        )
    })
    return <Component />
    
}

