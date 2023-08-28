import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Button } from "@chakra-ui/react";
import ProfileDropdown from "../ProfileDropdown";
import React, { useEffect } from 'react';

export const AuthButtons = () => {
	const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

	useEffect(() => {
		console.log("Authentication state changed: ", isAuthenticated);
	  }, [isAuthenticated]);

	const handleLogin = () => {
		loginWithRedirect();
	};

	const handleSignout = () => {
		logout();
	};

	return (
		<Flex>
			{!isAuthenticated ? (
				<Button onClick={handleLogin}>Log In</Button>
			) : (
				<>
				<ProfileDropdown onSignOut={handleSignout}/>
				</>
			)}
		</Flex>
	);

};


