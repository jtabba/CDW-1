import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Login() {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue("gray.100", "gray.700");
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={formBackground} p={12} rounded={6}>
                <Heading mb={6}>Log in</Heading>
                <Input placeholder="me@mydomain.com" variant="filled" mb={3} type="email"></Input>
                <Input placeholder="********" variant="filled" mb={6} type="password"></Input>
                <Button colorScheme="teal" mb={3}>Log in</Button>
                <Button onClick={toggleColorMode}>Toggle Night Mode</Button>
            </Flex>
        </Flex>
    )
}