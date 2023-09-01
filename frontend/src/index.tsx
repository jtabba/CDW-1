import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { Auth0ProviderWithNavigate } from "./components/authentication/Auth0ProviderWithNavigate";
import App from "./App";
import Fonts from "./Fonts";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Fonts />
			<BrowserRouter>
				<Auth0ProviderWithNavigate>
				<App />
				</Auth0ProviderWithNavigate>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
