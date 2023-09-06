import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react';
import { FC } from "react";
import { themeBlue } from "../theme/theme";

interface MissionProps {
    missionHeadline:string
    missionContent:string
    missionLinkLabel:string
    missionUrl:string
}

const Mission: FC<MissionProps> = ({ missionHeadline, missionContent, missionLinkLabel, missionUrl} ) => {

    return (
    <Box maxWidth={{ base: '90%', md: '90%' }}>
        <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
                {missionHeadline}
        </Heading>
        <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center'>
            <Box width={{ base: '100%', md: '100%' }}>
                <Text fontSize={{ base: 'lg', md: 'xl'}} pt={2} pr={2}>
                {missionContent}
                </Text>
                <Button color={themeBlue} mt={6} mb={4} variant='outline'>
                    {missionLinkLabel}
                </Button>
            </Box>
        </Flex>
    </Box>
    );
};

export default Mission;