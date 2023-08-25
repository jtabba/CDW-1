import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Profile from "../components/Profile";
import { useEffect, useState } from "react";
import { userData } from "../requests/types";
import { getAllUsers } from "../requests/getAllUsers";
import { Box, Stack } from "@chakra-ui/react";

export const Login = () => {
	const { isLoading, error } = useAuth0();
	const [users, setUsers] = useState<userData[]>([]);

	useEffect(() => {
		// request demo
		// open browser console to see result
		const getUsers = async () => {
			const response = await getAllUsers();
			console.log("response", response);

			if (response.success) {
				setUsers(response.data as userData[]);
			} else {
				// create error notification wth Chakra
			}
		};
		getUsers();
	}, []);

	return (
		<Stack direction={"row"} className="App">
			{/* <h1>Auth0 Login</h1>
			{error && <p>Authentication Error</p>}
			{!error && isLoading && <p>Loading...</p>}
			{!error && !isLoading && (
				<>
					<LoginButton />
					<LogoutButton />
					<Profile />
					{users.map((user) => (
						<Box>{user.name}</Box>
					))}
				</>
			)} */}
		</Stack>
	);
};
