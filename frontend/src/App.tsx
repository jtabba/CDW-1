import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
    </ChakraProvider>
  )
}

export default App;
