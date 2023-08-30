import { useEffect, useState } from "react";
import { getAllUsers } from "./requests/getAllUsers";
import { userData } from "./requests/types";
import { UserInterface } from "./components/UserInterface";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Onboarding from "./pages/onboarding";

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

	return (
		<Router>
			<Routes>
				<Route path="/" element={<UserInterface />}>
					<Route path="home" element={<Home />} />
					<Route path="onboarding" element={<Onboarding />} />
					<Route path="explore" element={<h1>Explore</h1>} />
					<Route path="products" element={<h1>Products</h1>} />
					<Route path="mentors" element={<h1>Mentors</h1>} />
					<Route path="*" element={<h1>404: Page Not Found</h1>} />
					<Route path="profile" element={<Profile />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
