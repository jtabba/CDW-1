import { Flex, ButtonGroup, Button } from "@chakra-ui/react";

const AuthButtons = () => {
    return (
        <Flex>
            <ButtonGroup
                 spacing='6'
            >
                <Button variant='outline'>Log In</Button>
                <Button>Register</Button>
            </ButtonGroup>
        </Flex>
    );
};

export default AuthButtons;