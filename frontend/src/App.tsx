import React from 'react';
import { Container, Grid, ChakraProvider, GridItem } from '@chakra-ui/react'
import theme from './theme';
import NavBar from './components/NavBar';
/*
Container - to control width of page
  Grid component for layout
    Grid Item
      NavBar component (create)
        Flex component
          Logo component
          (conditional rendering for nav links?)
          Button group component
            Button
            Button
    Grid Item
      Main component (create)
        Flex components
          Box
            Heading
            Text
          Button
        Flex components
          Box
        Flex components
    Grid Item
      Footer component (create)
        Box component for copyright
        Box component for links
    
*/
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container 
        margin='auto'
        maxWidth='80%'
      >
        <Grid
          templateRows='repeat(3, 1fr)'
          gap={1}
        >
          <GridItem 
            className='header'
          >
            <NavBar isLoggedIn={false}/>
          </GridItem>
          <GridItem className='main'>
            Main
          </GridItem>
          <GridItem className='footer'>
            Footer 
          </GridItem>
        </Grid>
      </Container>
    </ChakraProvider>
  )
}

export default App;
