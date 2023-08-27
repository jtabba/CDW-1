import "./index.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import Home from "./pages/home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN!;
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID!;

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Auth0Provider
				domain={DOMAIN}
				clientId={CLIENT_ID}
				authorizationParams={{
					redirect_uri: window.location.origin
				}}
			>
				<Router>
					<Routes>
						<Route path="/" element={<App />}>
							<Route path="home" element={<Home />} />
							<Route path="explore" element={<h1>Explore</h1>} />
							<Route
								path="products"
								element={<h1>Products</h1>}
							/>
							<Route path="mentors" element={<h1>Mentors</h1>} />
						</Route>
					</Routes>
				</Router>
			</Auth0Provider>
		</ChakraProvider>
	</React.StrictMode>
);
