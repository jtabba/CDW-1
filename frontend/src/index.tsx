import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import Fonts from "./Fonts";
import '@fontsource/bree-serif';

const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN!;
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID!;

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
