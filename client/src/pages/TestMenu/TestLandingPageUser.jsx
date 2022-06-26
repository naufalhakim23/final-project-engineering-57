import React from 'react';

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import HeaderDashboard from '../../components/DashboardComponents/HeaderDashboard.tsx';

export default function TestLandingPage() {
  return (
    <Box minH="100vh" bg={useColorModeValue('green.50', 'gray.900')}>
      <HeaderDashboard />
      <Container maxW={'7xl'} marginTop={10}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                }}
              >
                Mulai survey
              </Text>
              <br />
              <Text>RIASEC mu!</Text>
            </Heading>
            <Text color={'gray.500'}>
              Saat kamu melakukan RIASEC test, kamu akan menjawab pertanyaan
              mengenai aspirasi, aktivitas, kemampuan, dan ketertarikan di dalam
              berbagai pekerjaan. Semoga hasil dari test ini dapat membantu kamu
              mencari pekerjaan atau bidang studi yang paling cocok dan memuaskan.
            </Text>
            <Stack
              minH={'60px'}
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Link to={'/test/soal'}>
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'green'}
                  bg={'green.400'}
                  _hover={{ bg: 'green.500' }}
                >
                  Mulai
                </Button>
              </Link>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
            >
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

