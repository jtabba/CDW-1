import { Container, Grid } from "@chakra-ui/react";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";

export const UserInterface = () => {
	return (
		<Container margin="auto" maxWidth="90%" padding={"28px 0px"}>
			<Grid templateRows="repeat(3, auto)" gap={1}>
				<Header />

				{/* Outlet acts as a placeholder for pages of our routes */}
				<Outlet />
			</Grid>
		</Container>
	);
};
