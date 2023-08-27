import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import Home from "./pages/Home";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Home />
		</ChakraProvider>
	);
}

export default App;
