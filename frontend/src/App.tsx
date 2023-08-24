import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Home from './pages/Home';

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <ChakraProvider theme={theme}>
      <main className="App">
        <h1>Auth0 Login</h1>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!error && !isLoading && (
          <>
            <LoginButton />
            <LogoutButton />
            <Profile />
          </>
        )}
      </main>
      <Home />
    </ChakraProvider>
  );
}

export default App;
