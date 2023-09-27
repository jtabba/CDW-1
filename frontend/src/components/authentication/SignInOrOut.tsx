import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Button, useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import ProfileDropdown from "../ProfileDropdown";
import {themeBlue, themeDarkBlue, themeGrey} from "../../theme/theme";

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

  const bg = useColorModeValue(themeBlue, themeBlue)
  const bgHover = useColorModeValue(themeDarkBlue, themeDarkBlue)
  const color = useColorModeValue("white", themeGrey)

  return (
    <Flex>
      <Button p={0} mt={1} mr={3} onClick={toggleColorMode}>
         {colorMode === 'light' ? <IconButton aria-label='dark mode' icon={<MoonIcon />} /> : <IconButton aria-label='light mode' icon={<SunIcon />} />}
      </Button>
      {!isAuthenticated ? (
        <Button _hover={{background: bgHover}}color="white" bgColor={bg} mt={1} onClick={handleLogin}>Log In</Button>
      ) : (
        <>
          <ProfileDropdown onSignOut={handleSignout} />
        </>
      )}
    </Flex>
  );
};
