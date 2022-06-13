import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <LandingPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
