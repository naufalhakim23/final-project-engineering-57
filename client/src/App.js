import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard  from './pages/dashboard/Dashboard';
import { Pilihan } from './pages/Pilihan';
import { Soal } from './pages/Soal';
import { Tes } from './pages/Tes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Wajib Login */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/soal" element={<Soal />} />
        <Route path="/soal/:idsoal" element={<Pilihan />} />
        <Route path="/tes" element={<Tes />} />

      </Routes>
    </ChakraProvider>
  );
}

export default App;
