import { Box, Heading, Flex, Text, Image, Button} from '@chakra-ui/react';
import { FC } from 'react';
import { themeBlue } from "../theme/theme";

interface FeatureSectionProps {
    FEATURE_HEADLINE:string
    FEATURE_CONTENT:string
    FEATURE_LINK_LABEL:string
    FEATURE_URL:string
}

const FeatureSection: FC<FeatureSectionProps> = ({FEATURE_HEADLINE, FEATURE_CONTENT, FEATURE_LINK_LABEL, FEATURE_URL}) => {
    return (
        <Box maxWidth={{ base: '90%', md: '90%' }}>
            <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
                    {FEATURE_HEADLINE}
            </Heading>
            <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center'>
                <Box width={{ base: '100%', md: '60%' }}>
                    <Text fontSize={{ base: 'lg', md: 'xl'}} pt={2} pr={2}>
                    {FEATURE_CONTENT}
                    </Text>
                    <Button color={themeBlue} mt={6} mb={4} variant='outline'>
                        {FEATURE_LINK_LABEL}
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