import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';
import Profile from './profile';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Profile />
    </ChakraProvider>
  )
}

export default App;
