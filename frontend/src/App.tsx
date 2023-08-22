import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/login';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  )
}

export default App;
