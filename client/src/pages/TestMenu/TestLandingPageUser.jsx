import React from 'react';
import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

import DashboardHero from '../../components/TestPage/UserHero.tsx';
import HeaderDashboard from '../../components/DashboardComponents/HeaderDashboard.tsx';

export default function TestLandingPage() {
  return (
    <Box minH="100vh" bg={useColorModeValue('green.50', 'gray.900')}>
      <HeaderDashboard />
      <DashboardHero />
    </Box>
  );
}

