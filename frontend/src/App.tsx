import { useEffect } from "react";
// import { userData } from "./requests/types";
import { UserInterface } from "./components/UserInterface";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
// import { useAuth0 } from "@auth0/auth0-react";
import {   getSingleUser } from "./requests/getAllUsers";

const App = () => {
	// const [users, setUsers] = useState<userData[]>([]);
	// const { user } = useAuth0()

	// const usersData: Partial<userData> = {
	// 	_id: user?.sub,
	// 	name: user?.nickname,
	// 	email: user?.email,
	// }
	useEffect(() => {
		const fetchData = async () => {
		try{
			
			const response = await getSingleUser('64e7ebcd41c790a1f83942c8')
			console.log(response.data)
			}catch(err){
			console.error("an Error Occured:", err)
		}
		
	} 

	// 
	
	fetchData()
		
	}, []);
	

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
