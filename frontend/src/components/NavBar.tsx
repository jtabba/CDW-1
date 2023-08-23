import { Avatar, Flex } from '@chakra-ui/react';
import Logo from './Logo';
import AuthButtons from './AuthButtons';
//import NavLinks from './NavLinks';

interface NavBarProps {
    isLoggedIn: boolean,
}

const NavBar = ({isLoggedIn} : NavBarProps): JSX.Element => {
    return (
        <Flex 
            justifyContent='space-between'
            alignItems='center'
            h='60px'
            outline={1}
        >
            <Logo />
            {/*isLoggedIn ? <NavLinks /> : null */}
            {isLoggedIn ? <Avatar /> : <AuthButtons />}
        </Flex>
    )
};

export default NavBar;