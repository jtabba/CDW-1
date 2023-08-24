import { Card, Heading, Flex, Text, Image, Link, Spacer} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
const FeatureCard = () : JSX.Element => {
    return (
        <Flex
            flexDirection='row'
            flexWrap='wrap'
            justifyContent='space-between'
        >      
            <Flex flexDirection='column' rowGap={1} maxWidth='50%'>
                <QuestionIcon fontSize='4xl'/>
                <Spacer />
                <Heading size='md'>Lorem Ipsum</Heading>
        
                <Text py='2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
        
                <Link variant='solid' colorScheme='blue'>
                    Lorem Ipsum {'>'}
                </Link>
            </Flex>
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
            />
        </Flex>
    );
};

export default FeatureCard;