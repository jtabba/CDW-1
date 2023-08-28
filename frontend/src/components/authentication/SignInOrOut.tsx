import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Button } from "@chakra-ui/react";
import ProfileDropdown from "../ProfileDropdown";

export const AuthButtons = () => {
	const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

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
				<ProfileDropdown />
				<Button variant="outline" onClick={handleSignout}>
					Sign out
				</Button>
				</>
			)}
		</Flex>
	);

};


