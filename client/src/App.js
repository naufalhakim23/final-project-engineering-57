import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import DashboardU from './pages/DashboardU';
import { Pilihan } from './pages/Pilihan';
import { Soal } from './pages/Soal';
import { Tes } from './pages/Tes';
import Progress from './pages/Progress';
import Completed from './pages/Completed';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Wajib Login */}
        <Route path="/dashboard" element={<DashboardU />} />
        <Route path="/soal" element={<Soal />} />
        <Route path="/soal/:idsoal" element={<Pilihan />} />
        <Route path="/tes" element={<Tes />} />
        <Route path="/Progress" element={<Progress />} />
        <Route path="/Completed" element={<Completed />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
