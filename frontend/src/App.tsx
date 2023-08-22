import React from 'react';
//import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/login';

import './App.css';


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  )
}

export default App;
