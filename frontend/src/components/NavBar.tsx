import { Avatar, Flex } from '@chakra-ui/react';
import Logo from './Logo';
import AuthButtons from './AuthButtons';
//import NavLinks from './NavLinks';

interface NavBarProps {
    isLoggedIn: boolean,
}

const NavBar = (props : NavBarProps) => {
    const { isLoggedIn } = props;
    return (
        <Flex justifyContent='space-between'>
            <Logo />
            {/*isLoggedIn ? <NavLinks /> : null */}
            {isLoggedIn ? <Avatar /> : <AuthButtons />}
        </Flex>
    )
};

export default NavBar;