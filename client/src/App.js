import React, { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TestLandingPageUser from './pages/TestMenu/TestLandingPageUser';
// import { Pilihan } from './pages/Pilihan';
import AboutUs from './pages/AboutUs';
import NewDashboard from './pages/Dashboard/Dashboard';
import DashboardCompleted from './pages/Dashboard/DashboardCompleted';
import DashboardInProgress from './pages/Dashboard/DashboardInProgress';
import MeetTeam from './pages/MeetTeam';
import TestUser from './pages/TestMenu/TestUser';
import ResultTest from './pages/TestMenu/ResultTest';
import AdminDasboard from './pages/dashboard/AdminDashboard';
import useStore from './Store/useStore';

function App() {
  const isLoggedInGlobal = useStore(state => state.isLoggedInGlobal);
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedInGlobal ? (
              <Navigate to="/home" />
            ) : (
              <Navigate to="/landing-page" />
            )
          }
        />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/meet-the-team" element={<MeetTeam />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Wajib Login */}
        <Route path="/test" element={<TestLandingPageUser />} />
        <Route path="/test/soal" element={<TestUser />} />
        <Route path="/test/result" element={<ResultTest />} />
        {/* <Route path="/soal/:idsoal" element={<Pilihan />} /> */}
        {/* <Route path="/tes" element={<Tes />} /> */}
        <Route path="/dashboard/admin" element={<AdminDasboard />} />
        {/*Dashboard menus*/}
        <Route path="/home" element={<NewDashboard />} />
        <Route path="/in-progress" element={<DashboardInProgress />} />
        <Route path="/completed" element={<DashboardCompleted />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
