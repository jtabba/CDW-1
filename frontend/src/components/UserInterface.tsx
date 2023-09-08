import { Container, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const UserInterface = () => {
  return (
    <Container marginX={"auto"} maxWidth="90%">
      <Grid templateRows="repeat(3, auto)" gap={1}>
        {/* Outlet acts as a placeholder for pages of our routes */}

        <Outlet />
      </Grid>
    </Container>
  );
};
