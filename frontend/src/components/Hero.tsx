import { Button, Flex, Text, Heading } from '@chakra-ui/react';
const Hero = () => {
    return (
        <Flex flexDirection='column' height='80vh' justifyContent='center' alignItems='center' rowGap={6}>
            <Heading fontSize='7xl' textAlign='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Heading>
            <Text textAlign='center' fontSize='large'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Button size='md' width='4xs'>Get Started</Button>
        </Flex>
    );
};

export default Hero;