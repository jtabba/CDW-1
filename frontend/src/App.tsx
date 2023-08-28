import { useEffect, useState } from "react";
import { getAllUsers } from "./theme/requests/getAllUsers";
import { userData } from "./theme/requests/types";
import { UserInterface } from "./components/UserInterface";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthenticationGuard } from "./components/authentication/authenticationGuard";
import Home from "./pages/home";
import Profile from "./pages/profile";
import { useAuth0 } from "@auth0/auth0-react";
import { profile } from "console";

const App = () => {
	const [users, setUsers] = useState<userData[]>([]);

	// ***PURELY FOR EXAMPLE***
	useEffect(() => {
		// open browser console to see result
		const getUsers = async () => {
			const response = await getAllUsers();

			if (response.success) {
				setUsers(response.data as userData[]);
			} else {
				// create error notification wth Chakra
			}
		};

		getUsers();
		console.log("users", users);
	});
	// ***PURELY FOR EXAMPLE***

	const { isLoading } = useAuth0();

	if (isLoading) {
		return (
			<div>
				<h1>Loader...</h1>
			</div>
		);
	}

	return (
		<Routes>
			<Route path="/" element={<UserInterface />}>
				<Route path="home" element={<Home />} />
				<Route path="explore" element={<h1>Explore</h1>} />
				<Route path="products" element={<h1>Products</h1>} />
				<Route
					path="mentors"
					element={
						<AuthenticationGuard component={<h1>Mentors</h1>} />
					}
				/>
				<Route
					path="profile"
					element={<AuthenticationGuard component={Profile} />}
				/>
				<Route path="callback" element={<CallbackPage />} />
				<Route path="*" element={<h1>404: Page Not Found</h1>} />
				<Route path="profile" element={<Profile />} />
			</Route>
		</Routes>
	);
};

export default App;
