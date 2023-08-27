import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import Home from "./pages/home";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box className="App">
				<Router>
					<nav className="dummy-nav">
						<Link to={"/explore"}>Explore</Link>
						<Link to={"/products"}>Product</Link>
						<Link to={"/mentors"}>Mentors</Link>
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
			</Box>
		</ChakraProvider>
	);
}

export default App;
