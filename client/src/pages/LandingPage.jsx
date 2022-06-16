import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Heading,
  Container,
  VStack,
  Center,
  HStack,
  Image,
  Spacer,
} from '@chakra-ui/react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Flex
        w={'full'}
        h={'150vh'}
        backgroundImage="url('./assets/images/test.png')"
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        mb={10}
      >
        <Container maxW={'7xl'} mt={20}>
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Box
              bg={'whiteAlpha.700'}
              maxW="lg"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              blur={'lg'}
            >
              <Heading
                lineHeight={1.1}
                fontWeight={500}
                fontSize={{ base: '1xl', sm: '2xl', lg: '4xl' }}
                color="black"
                mb={4}
                mt={4}
                ml={2}
                textAlign="left"
              >
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '40%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'red.400',
                    zIndex: -1,
                  }}
                >
                  Bangun masa depanmu,
                </Text>
                <br />
                <Text as={'span'} color={'black'}>
                  dengan Impianmu!
                </Text>
              </Heading>
              <Text fontSize={'lg'} textAlign="left" mb={4} ml={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac
                semper orci, eu porttitor lacus.
              </Text>
              <Button
                mb={5}
                backgroundColor="#00D563"
                width="250px"
                borderRadius="15px"
              >
                <Text fontSize={'lg'} color="white">
                  Get Started
                </Text>
              </Button>
            </Box>
          </Stack>
        </Container>
      </Flex>
      <Container
        maxW={'5xl'}
        mb={10}
        className='feature-section'
      >
        <Center>
          <HStack>
            <Image
              borderRadius='full'
              boxSize='300px'
              src='./assets/images/Ellipse 1.png'
              alt='profile'
            />
            <VStack spacing={4} alignItems={{ base: 'center', sm: 'flex-start' }}>
              <Stack>
                <Heading
                  fontWeight={600}
                >
                  Temukan Peluang Minatmu
                </Heading>
                <Text fontSize={'md'}
                >
                  Untuk mempermudah pencarian minat dan impianmu dengan langkah mudah, biasakan dirimu dengan kelas yang hampir sama dengan kuliah, dan bertemu dengan calon mahasiswa maupun mahasiswa secara online.
                </Text>
                <Container
                  maxW='sm'
                  alignSelf={'center'}
                >
                  <Flex>
                    <VStack>
                      <Text
                        fontSize={'2xl'}
                        fontWeight={500}
                        color={'#2400B4'}
                        mb={0}
                      >
                        Jurusan
                      </Text>
                      <Text
                        fontSize={'4xl'}
                        fontWeight={1000}
                      >
                        100+
                      </Text>
                    </VStack>
                    <Spacer />
                    <VStack
                    >
                      <Text
                        fontSize={'2xl'}
                        fontWeight={500}
                        color={'#2400B4'}
                      >
                        Kelas
                      </Text>
                      <Text
                        fontSize={'4xl'}
                        fontWeight={1000}
                      >
                        50+
                      </Text>
                    </VStack>
                    <Spacer />
                    <VStack
                    >
                      <Text
                        fontSize={'2xl'}
                        fontWeight={500}
                        color={'#2400B4'}
                      >
                        Support
                      </Text>
                      <Text
                        fontSize={'4xl'}
                        fontWeight={1000}
                      >
                        24/7
                      </Text>
                    </VStack>
                  </Flex>
                </Container>
                <Center>
                  <Button
                    backgroundColor="#00D563"
                    width={'500px'}
                  >
                    <Text fontSize={'lg'} color="white">
                      Get Started
                    </Text>
                  </Button>
                </Center>
              </Stack>
            </VStack>
          </HStack>
        </Center>
      </Container>

      <Footer />
    </>
  );
}
