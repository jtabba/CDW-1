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
        <Box
            maxWidth='65%'
        >      
            <Flex 
                flexDirection='row'
                flexWrap='wrap'
                justifyContent='space-between'
            >
                <Flex 
                    flexDirection='column' 
                    rowGap={1} 
                    maxWidth='50%'
                >
                    <Flex
                        flexDirection='row'
                        columnGap={2}
                        alignItems='center'
                    >
                        <QuestionIcon fontSize='4xl'/>
                        <Heading fontSize='clamp(2rem, -0.875rem + 8.333vw, 2.5rem)'>{headline}</Heading>
                    </Flex>
            
                    <Text py='3' fontSize='clamp(1rem, -0.875rem + 8.333vw, 1rem)'>
                        {content}
                    </Text>
            
                    <Button variant='outline' size='sm' width='160px'>
                        {buttonLabel}
                    </Button>
                </Flex>
            
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />
            </Flex>
        </Box>
    );
};

export default FeatureSection;