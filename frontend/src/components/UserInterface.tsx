import { Container, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const UserInterface = () => {
  return (
    <Container margin="0" padding="0" maxWidth="100%">
      <Grid templateRows="repeat(3, auto)" gap={1}>
        {/* Outlet acts as a placeholder for pages of our routes */}
        <Outlet />
      </Grid>
    </Container>
  );
};
