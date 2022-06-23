import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import { Pilihan } from './pages/Pilihan';
import { Soal } from './pages/Soal';
import { Tes } from './pages/Tes';
import AboutUs from './pages/AboutUs';
import NewDashboard from './pages/Dashboard/Dashboard';
import DashboardCompleted from './pages/Dashboard/DashboardCompleted';
import DashboardInProgress from './pages/Dashboard/DashboardInProgress';
import MeetTeam from './pages/MeetTeam';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/meet-the-team" element={<MeetTeam />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Wajib Login */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/soal" element={<Soal />} />
        <Route path="/soal/:idsoal" element={<Pilihan />} />
        <Route path="/tes" element={<Tes />} />
        {/*Dashboard menus*/}
        <Route path="/new-dashboard" element={<NewDashboard />} />
        <Route path="/home" element={<NewDashboard />} />
        <Route path="/in-progress" element={<DashboardInProgress />} />
        <Route path="/completed" element={<DashboardCompleted />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
