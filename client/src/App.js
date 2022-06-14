import React from 'react';
import {
  ChakraProvider,
  IconButton,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  ColorModeProvider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider> 
      <Box fontWeight='bold' fontSize='48px' mt={10} align="center" justifyContent="center">IMPIANMU</Box>
      <Login />
      </ColorModeProvider>
        
   
    </ChakraProvider>
  );
}

const Login = () => {
  return (
    <Flex minHeight ='75vh'width='full' align="center" justifyContent='center'>
      <Box
      borderWidth={1}
      px={4}
      width='full'
      maxWidth='500px'
      borderRadius={4}
      boxShadow='lg'>
        <ColorModeSwitcher />
        <Box p={3}>
        <LoginHeader />
        <LoginForm />
      </Box>
      </Box>
    </Flex>
  )
}

const LoginHeader = () => {
  return (
    <Box textAlign='center'>
      <Heading>Masuk Ke Akunmu</Heading>
      <Text>atau <Link>Daftar?</Link> </Text>
    </Box>
  )
}

const LoginForm = () => {
  return (
    <Box my={8} >
      <form>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Masukkan email" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="Password" placeholder="Masukkan rassword" />
        </FormControl>


        <Stack isInline justifyContent='space-between'mt={4}>
          <Box>
            <Checkbox>Ingat Saya</Checkbox>
          </Box>
          <Box>
            <Link>Lupa Password?</Link>
          </Box>
        </Stack>

        <Button width='full' mt ={4}>Masuk</Button>
      </form>
    </Box>
  )
}
export default App;
