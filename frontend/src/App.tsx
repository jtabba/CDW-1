import { ChakraProvider, Container, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import theme from "./theme/theme";
import { Header } from "./components/header/Header";
import { useEffect, useState } from "react";
import { getAllUsers } from "./requests/getAllUsers";
import { userData } from "./requests/types";

const App = () => {
	const [users, setUsers] = useState<userData[]>([]);

	// ***PURELY FOR EXAMPLE***
	useEffect(() => {
		// open browser console to see result
		const getUsers = async () => {
			const response = await getAllUsers();
			console.log("response", response);

			if (response.success) {
				setUsers(response.data as userData[]);
			} else {
				// create error notification wth Chakra
			}
		};
		getUsers();
	});
	// ***PURELY FOR EXAMPLE***

	return (
		<ChakraProvider theme={theme}>
			<Container margin="auto" maxWidth="90%" padding={"28px 0px"}>
				<Grid templateRows="repeat(3, auto)" gap={1}>
					<Header />

					{/* Outlet acts as a placeholder for pages of our routes */}
					<Outlet />
				</Grid>
			</Container>
		</ChakraProvider>
	);
};

export default App;
