import { Button, Flex, Text, Heading } from '@chakra-ui/react';
import { FC } from 'react';

interface HeroProps {
    headline:string
    content:string
    buttonLabel:string
    buttonUrl:string
}

const Hero: FC<HeroProps> = ({ headline, content, buttonLabel, buttonUrl}) => {
    return (
        <Flex flexDirection='column' height='80vh' justifyContent='center' alignItems='center' rowGap={6}>
            <Heading fontSize='clamp(2rem, -0.875rem + 8.333vw, 4.5rem)' textAlign='center'>
                {headline}
            </Heading>
            <Text textAlign='center' fontSize='clamp(1rem, -0.875rem + 8.333vw, 1.15rem)'>
                {content}
            </Text>
            <Button size='lg' width='3xs'>{buttonLabel}</Button>
        </Flex>
    );
};

export default Hero;