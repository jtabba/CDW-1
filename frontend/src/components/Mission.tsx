import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react';
import { FC } from "react";
import { themeBlue, themeGrey, themeDarkBlue, themeLightGrey, themeLightBlue } from "../theme/theme";

interface MissionProps {
    missionHeadline:string
    missionContent:string
    missionLinkLabel:string
    missionUrl:string
}

const Mission: FC<MissionProps> = ({ missionHeadline, missionContent, missionLinkLabel, missionUrl} ) => {

    return (
    <Flex bgColor={themeLightGrey} pb={16} width="100%">
        <Box maxWidth={{ base: '90%', md: '70%', xl: '55%' }} ml="auto" mr="auto" pt="70px">
            <Heading color={themeBlue} fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
                    {missionHeadline}
            </Heading>
            <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center'>
                <Box width={{ base: '100%', md: '100%' }}>
                    <Text fontSize={{ base: 'lg', md: 'xl'}} pt={2} pr={2}>
                    {missionContent}
                    </Text>
                    <Button color={themeBlue}bgColor="white" mt={6} mb={4}>
                        {missionLinkLabel}
                    </Button>
                </Box>
            </Flex>
        </Box>
    </Flex>
    );
};

export default Mission;