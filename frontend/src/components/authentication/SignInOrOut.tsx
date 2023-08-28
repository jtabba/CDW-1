import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Button } from "@chakra-ui/react";
import ProfileDropdown from "../ProfileDropdown";

export const AuthButtons = () => {
	const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

	const handleLogin = () => {
		loginWithRedirect({
			appState: {
				returnTo: '/profile',
			}
		});
	};

	const handleSignUp = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: './profile'
			},
			authorizationParams:{
				screen_hint: 'signup'}
		})
	}

	const handleSignout = () => {
		logout({
			logoutParams: {
				returnTo: window.location.origin
			}
		});
	};

	return (
		<Flex>
			{!isAuthenticated ? (
				<>
				<Button onClick={handleLogin}>Log In</Button>
				<Button onClick={handleSignUp}>Sign Up</Button>
				</>
			) : (
				<>
					<ProfileDropdown onSignOut={handleSignout} />
				</>
			)}
		</Flex>
	);
};
