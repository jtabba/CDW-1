import { Flex, ButtonGroup, Button } from "@chakra-ui/react";

const AuthButtons = () => {
    return (
        <Flex>
            <ButtonGroup
                variant='outline' spacing='6'
            >
                <Button>Log In</Button>
                <Button>Register</Button>
            </ButtonGroup>
        </Flex>
    );
};

export default AuthButtons;