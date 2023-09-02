import { Box, Heading, Flex, Text, Image, Button} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import { FC } from 'react';

interface FeatureSectionProps {
    headline:string
    content:string
    buttonLabel:string
    buttonUrl:string
}

const FeatureSection: FC<FeatureSectionProps> = ({headline, content, buttonLabel, buttonUrl}) => {
    return (
        // <Box
        //     maxWidth='90%'
        // >      
        //     <Flex 
        //         flexDirection='row'
        //         flexWrap='wrap'
        //         justifyContent='center'
        //     >
        //         <Flex 
        //             flexDirection='column' 
        //             rowGap={1} 
        //             maxWidth='90%'
                    
        //         >
        //             <Flex
        //                 flexDirection='row'
        //                 // columnGap={2}
        //                 alignItems='center'
        //             >
        //                 {/* <QuestionIcon fontSize='4xl'/> */}
        //                 <Heading fontSize='clamp(1.8rem, -0.875rem + 8.333vw, 2.5rem)'>{headline}</Heading>
        //             </Flex>
            
        //             <Text py='3' fontSize='clamp(1rem, -0.875rem + 8.333vw, 1rem)'>
        //                 {content}
        //             </Text>
            
        //             <Button mb={10} variant='outline' size='sm' width='160px'>
        //                 {buttonLabel}
        //             </Button>
        //         </Flex>
            
        //         <Image
        //             objectFit='cover'
        //             maxW={{ base: '100%', sm: '200px' }}
        //             src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        //             alt='Caffe Latte'
        //             p="10px"
        //         />
        //     </Flex>
        // </Box>

        // TESTING BELOW

        <Box maxWidth={{ base: '90%', md: '60%' }}>
            <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
                    About Us
            </Heading>
            <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center'>
                
                <Box width={{ base: '100%', md: '60%' }}>
                {/* <Heading fontSize={{ base: 'xl', md: '2xl' }} mb={4}>
                    About Us
                </Heading> */}
                <Text fontSize={{ base: 'lg', md: 'xl'}} pt={2} pr={2}>
                Introducing MentorShip, where experienced senior engineers guide aspiring junior developers, all while navigating the seas of real-world projects. Step into our maritime-themed platform where close-knit crews of developers board 'Ships,' complete real-world tech projects called 'Voyages,' gaining experience and advancing in rank by conquering coding challenges together.
                </Text>
                <Button mt={6} mb={4} variant='outline'>
                    Explore
                </Button>
                </Box>
                <Box width={{ base: '100%', md: '40%' }} ml={{ base: 0, md: 4 }}>
                <Image src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='your-image-alt' />
                </Box>
            </Flex>
        </Box>
    );
};

export default FeatureSection;