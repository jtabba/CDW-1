import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import Home from "./pages/Home";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
	const { user, isLoading, error } = useAuth0();

	return (
		<ChakraProvider theme={theme}>
			<main className="App">
				<Router>
					<nav className="dummy-nav">
						<Link to={"/explore"}>Explore</Link>
						<Link to={"/products"}>Product</Link>
						<Link to={"/mentors"}>Mentors</Link>
						<>
							{" "}
							<LoginButton />
							<LogoutButton />
						</>

						<Link to={"/signup"}>Sign Up</Link>
					</nav>

					<Routes>
						<Route path="/" element={<h1>Home</h1>} />
						<Route path="/explore" element={<h1>Explore</h1>} />
						<Route path="/products" element={<h1>Products</h1>} />
						<Route path="/mentors" element={<h1>Mentors</h1>} />
						<Route path="/login" element={<h1>Log In</h1>} />
						<Route path="/signup" element={<h1>Sign Up</h1>} />
						<Route
							path="/*"
							element={<h1>404: Page not found</h1>}
						/>
					</Routes>
				</Router>

				<Home />
			</main>
		</ChakraProvider>
	);
}

export default App;
