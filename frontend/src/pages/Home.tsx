import { Container, Grid, Flex, Text, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
const Home = () : JSX.Element => {
    return (
        <Container 
            margin='auto'
            maxWidth='90%'
        >
            <Grid
            templateRows='repeat(3, auto)'
            gap={1}
            >
                <GridItem 
                    className='header'
                >
                    <NavBar isLoggedIn={false}/>
                </GridItem>
                <GridItem 
                    className='main'
                    flexDirection='column'
                >
                    <Flex
                        maxWidth='60%'
                        margin='auto'
                        flexDirection='column'
                        justifyContent='center'
                    >
                        <Hero />
                        <FeatureCard />
                    </Flex>
                </GridItem>
                <GridItem className='footer'>
                    <Footer />
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Home;

