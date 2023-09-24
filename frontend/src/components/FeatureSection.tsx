import { Box, Heading, Flex, Text, Image, Button, useColorModeValue} from '@chakra-ui/react';
import { FC } from 'react';
import { themeBlue, themeDarkGrey, themeGrey } from "../theme/theme";

interface FeatureSectionProps {
    featureHeadline:string
    featureContent:string
    featureLinkLabel:string
    featureUrl:string
}

const FeatureSection: FC<FeatureSectionProps> = ({featureHeadline, featureContent, featureLinkLabel, featureUrl}) => {
    const bg = useColorModeValue("#fff", "#000")
	const buttonBg = useColorModeValue(themeBlue, themeGrey)
    // const buttonBorder = useColorModeValue("#fff", themeBlue)
	const buttonColor = useColorModeValue(themeBlue, "fff")
    return (
        <Flex bg={bg} pb={16} width="100%">
            <Box  maxWidth={{ base: '90%', md: '70%', lg: '55%' }} pt="70px" ml="auto" mr="auto">
                <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={4} color={themeBlue}>
                        {featureHeadline}
                </Heading>
                <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center'>
                    <Box width={{ base: '100%', md: '60%' }}>
                        <Text fontSize={{ base: 'lg', md: 'xl'}} pt={2} pr={2}>
                        {featureContent}
                        </Text>
                        <Button color="white" bgColor={buttonBg} pt={1} mt={6} mb={8} >
                            {featureLinkLabel}
                        </Button>
                        </Box>
                        <Box width={{ base: '100%', md: '40%' }} ml={{ base: 0, md: 4 }}>
                        <Image src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='your-image-alt' />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default FeatureSection;