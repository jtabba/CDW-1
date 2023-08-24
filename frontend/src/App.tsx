import React, { useEffect, useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import { getAllUsers } from "./requests/getAllUsers";
import { userData } from "./requests/types";

function App() {
	const { isLoading, error } = useAuth0();
	const [users, setUsers] = useState<userData[]>([]);

	return (
		<ChakraProvider theme={theme}>
			<main className="App">
				<h1>Auth0 Login</h1>
				{error && <p>Authentication Error</p>}
				{!error && isLoading && <p>Loading...</p>}
				{!error && !isLoading && (
					<>
						<LoginButton />
						<LogoutButton />
						<Profile />
					</>
				)}
			</main>
			<Home />
		</ChakraProvider>
	);
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
		<ChakraProvider theme={theme}>
			<main className="App">
				<h1>Auth0 Login</h1>
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
				)}
			</main>
		</ChakraProvider>
	);
}

export default App;
