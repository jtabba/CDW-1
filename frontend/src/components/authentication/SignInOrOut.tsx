import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Button, useColorMode } from "@chakra-ui/react";
import ProfileDropdown from "../ProfileDropdown";
import {themeBlue} from "../../theme/theme";

export const AuthButtons = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  // For color toggling
  const { colorMode, toggleColorMode } = useColorMode()

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleSignout = () => {
    logout();
  };

  return (
    <Flex>
      <Button mt={1} onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      {!isAuthenticated ? (
        <Button color="white" bgColor={themeBlue} mt={1} onClick={handleLogin}>Log In</Button>
      ) : (
        <>
          <ProfileDropdown onSignOut={handleSignout} />
        </>
      )}
    </Flex>
  );
};
