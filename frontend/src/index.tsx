import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { Auth0ProviderWithNavigate } from "./components/authentication/Auth0ProviderWithNavigate";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Fonts from "./Fonts";
import '@fontsource/bree-serif';


const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Fonts />
			<Auth0Provider
				domain={DOMAIN}
				clientId={CLIENT_ID}
				authorizationParams={{
					redirect_uri: window.location.origin
				}}
			>
				<App />
			</Auth0Provider>
		</ChakraProvider>
	</React.StrictMode>
);
