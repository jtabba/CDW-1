import Metric from "./Metric";
import { Card , Box, Heading, Flex, Text, Button, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { themeBlue } from "../theme/theme";

interface MetricsProps {
    statNumber: string
    statText: string
    id: string
  }
  
  interface Props {
    metricsProps : MetricsProps[]; 
  }

const MetricSection: FC<Props> = ({ metricsProps }) : JSX.Element => {

    return (
        // KEEP COMMENTED CODE BELOW IN ORDER TO REVERT TO USE TEXT FROM HOME.TSX, UPON DIRECTION FROM @JT
        // <Card
        //     flexDirection='row'
        //     justifyContent='space-evenly'
        //     p='15px'
        //     width='65%'
        // >
        //     {metricsProps.map((metric, index) => <Metric key={metric.id} statNumber={metric.statNumber} statText={metric.statText}/> )}
        // </Card>
    <Box maxWidth={{ base: '90%', md: '90%' }}>
        <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
                Our Mission
        </Heading>
        <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center'>
            <Box width={{ base: '100%', md: '100%' }}>
                <Text fontSize={{ base: 'lg', md: 'xl'}} pt={2} pr={2}>
                At MentorShip, our mission is to reshape the landscape of software development mentorship. We're committed to providing an innovative platform that empowers senior developers to guide and mentor pre-junior developers, fostering an environment of collaborative learning and growth. Through our maritime-inspired approach, we aim to create a community where knowledge flows freely, challenges are met with enthusiasm, and connections are forged that last a lifetime. Our goal is to revolutionize how mentorship takes shape, enabling aspiring developers to chart their course towards excellence while sailing alongside seasoned experts. Join us on this transformative journey, where mentorship knows no limits and the waves of coding mastery are yours to conquer.
                </Text>
                <Button color={themeBlue} mt={6} mb={4} variant='outline'>
                    Join Today!
                </Button>
            </Box>
        </Flex>
    </Box>
    );
};

export default MetricSection;