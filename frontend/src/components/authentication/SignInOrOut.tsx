import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Button } from "@chakra-ui/react";
import ProfileDropdown from "../ProfileDropdown";
import {themeBlue} from "../../theme/theme";

export const AuthButtons = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleSignout = () => {
    logout();
  };

  return (
    <Flex>
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
