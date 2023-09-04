import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react';
import { FC } from "react";
import { themeBlue } from "../theme/theme";

interface MissionProps {
    MISSION_HEADLINE:string
    MISSION_CONTENT:string
    MISSION_LINK_LABEL:string
    MISSION_URL:string
}

const Mission: FC<MissionProps> = ({ MISSION_HEADLINE, MISSION_CONTENT, MISSION_LINK_LABEL, MISSION_URL} ) => {

    return (
    <Box maxWidth={{ base: '90%', md: '90%' }}>
        <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
                {MISSION_HEADLINE}
        </Heading>
        <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center'>
            <Box width={{ base: '100%', md: '100%' }}>
                <Text fontSize={{ base: 'lg', md: 'xl'}} pt={2} pr={2}>
                {MISSION_CONTENT}
                </Text>
                <Button color={themeBlue} mt={6} mb={4} variant='outline'>
                    {MISSION_LINK_LABEL}
                </Button>
            </Box>
        </Flex>
    </Box>
    );
};

export default Mission;