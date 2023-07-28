import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/auth/sign-up'
import { ChakraProvider } from "@chakra-ui/react";
import SignIn from './pages/auth/sign-in'

function App() {

  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<SignIn/>} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App
