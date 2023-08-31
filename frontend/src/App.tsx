import { useEffect, useState } from "react";
import { getAllUsers } from "./requests/getAllUsers";
import { userData } from "./requests/types";
import { UserInterface } from "./components/UserInterface";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import { useAuth0 } from "@auth0/auth0-react";
import { setSingleUserData } from "./requests/getAllUsers";
const App = () => {
	const [users, setUsers] = useState<userData[]>([]);
	const { user } = useAuth0()

	const usersData: Partial<userData> = {
		_id: user?.sub,
		name: user?.nickname,
		email: user?.email,
	}

	useEffect(() => {
		setSingleUserData(usersData)
	});

	return (
		<Router>
			<Routes>
				<Route path="/" element={<UserInterface />}>
					<Route path="home" element={<Home />} />
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
