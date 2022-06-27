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
  Image,
  Spacer,
  useMediaQuery
} from '@chakra-ui/react';
import LandingPageCard from '../components/LandingPageCard.tsx';
import Footer from '../components/Footer.tsx';
import HeaderDashboard from '../components/DashboardComponents/HeaderDashboard.tsx';
import { Link } from 'react-router-dom';
import LandingPageCard2 from '../components/LandingPageCard2.tsx';

export default function LandingPage() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <HeaderDashboard />
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
                fontSize={{ base: '2xl', sm: '2xl', lg: '4xl' }}
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
              <Text fontSize={{ base: 'lg', sm: 'lg', lg: 'xl' }} textAlign="left" mb={4} ml={2}>
                Impianmu menggunakan survey berbasis RIASEC untuk menyesuaikan
                kamu sesuai dengan hobi dan minat mu.
              </Text>
              <Center>
                <Link to={'/sign-up'}>
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
                </Link>
              </Center>
            </Box>
          </Stack >
        </Container >
      </Flex >
      <Container maxW={'5xl'} mb={10} className="feature-section" >
        <Center
          margin={isMobile ? '2' : '0 auto'}
        >
          {isMobile ? (
            <Container>
              <Flex
                direction={'column'}
                justify={'center'}
                align={'center'}
                mb={10}
                maxW={'640px'}
              >
                <Heading fontWeight={600} textAlign="center" mb={2} fontSize={'2xl'}
                >
                  Temukan Peluang Minatmu
                </Heading>
                <Flex
                  direction={'column'}
                  justify={'center'}
                  align={'center'}
                >
                  <Text
                    fontSize={'sm'}
                    textAlign="center"
                    color="gray.600"
                  >
                    Untuk mempermudah pencarian minat dan impianmu dengan langkah
                    mudah, biasakan dirimu dengan kelas yang hampir sama dengan
                    kuliah, dan bertemu dengan calon mahasiswa maupun mahasiswa
                    secara online.
                  </Text>
                </Flex>

              </Flex>
              <Stack>
                <Container maxW="sm" alignSelf={'center'}>
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
                      <Text fontSize={'4xl'} fontWeight={1000}>
                        100+
                      </Text>
                    </VStack>
                    <Spacer />
                    <VStack>
                      <Text fontSize={'2xl'} fontWeight={500} color={'#2400B4'}>
                        Kelas
                      </Text>
                      <Text fontSize={'4xl'} fontWeight={1000}>
                        50+
                      </Text>
                    </VStack>
                    <Spacer />
                    <VStack>
                      <Text fontSize={'2xl'} fontWeight={500} color={'#2400B4'}>
                        Support
                      </Text>
                      <Text fontSize={'4xl'} fontWeight={1000}>
                        24/7
                      </Text>
                    </VStack>
                  </Flex>
                </Container>
                <Center>
                  <Button backgroundColor="#00D563" width={'500px'}>
                    <Text fontSize={'lg'} color="white">
                      Get Started
                    </Text>
                  </Button>
                </Center>
              </Stack>
            </Container>
          ) : (
            <>
              <Image
                borderRadius="full"
                src="./assets/images/Ellipse 1.png"
                alt="profile"
                maxW="300px"
              />
              <VStack
                spacing={4}
                alignItems={{ base: 'center', sm: 'flex-start' }}
              >
                <Stack>
                  <Heading fontWeight={600} textAlign="center">
                    Temukan Peluang Minatmu
                  </Heading>
                  <Text fontSize={'md'} textAlign={'center'}>
                    Untuk mempermudah pencarian minat dan impianmu dengan langkah
                    mudah, biasakan dirimu dengan kelas yang hampir sama dengan
                    kuliah, dan bertemu dengan calon mahasiswa maupun mahasiswa
                    secara online.
                  </Text>
                  <Container maxW="sm" alignSelf={'center'}>
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
                        <Text fontSize={'4xl'} fontWeight={1000}>
                          100+
                        </Text>
                      </VStack>
                      <Spacer />
                      <VStack>
                        <Text fontSize={'2xl'} fontWeight={500} color={'#2400B4'}>
                          Kelas
                        </Text>
                        <Text fontSize={'4xl'} fontWeight={1000}>
                          50+
                        </Text>
                      </VStack>
                      <Spacer />
                      <VStack>
                        <Text fontSize={'2xl'} fontWeight={500} color={'#2400B4'}>
                          Support
                        </Text>
                        <Text fontSize={'4xl'} fontWeight={1000}>
                          24/7
                        </Text>
                      </VStack>
                    </Flex>
                  </Container>
                  <Center>
                    <Button backgroundColor="#00D563" width={'500px'}>
                      <Text fontSize={'lg'} color="white">
                        Get Started
                      </Text>
                    </Button>
                  </Center>
                </Stack>
              </VStack>
            </>
          )}
        </Center>
      </Container>
      <Container maxW={'7xl'} mb={3}>
        <Text fontSize={'3xl'} fontWeight={600} textAlign="center" mt={5}>
          Menurut Para Pengguna
        </Text>
        <Flex
          alignItems="center"
          justifyContent="center"
        >

          {
            isMobile ? (
              <>
                <Container>
                  <Flex
                    direction={'column'}
                    justify={'center'}
                    align={'center'}
                    maxW={'640px'}
                  >
                    {/* title, description, image, author */}
                    <LandingPageCard2
                      title="Prediksi yang tepat untukmu"
                      description="impianmu menyediakan prediksi yang tepat untukmu. Tanpa harus mengikuti kuliah, bisa mengikuti kuliah secara online."
                      image="https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      author="John Lennon"
                    />
                    <LandingPageCard2
                      title="This is magical"
                      description="impianmu help you to find the right course for you. No need to do bullshit, you can study online."
                      image="https://images.unsplash.com/photo-1656306403547-dd26883b6fb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                      author="Jayson Hinrichsen"
                    />
                    <LandingPageCard2
                      title="It's all about you"
                      description="impianmu help you to find the right course for you. No need to do bullshit, you can study online."
                      image="https://images.unsplash.com/photo-1656328120588-606ec5e73678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      author="Jayson Hinrichsen"
                    />
                  </Flex>
                </Container>
              </>
            ) : (
              <>

                <LandingPageCard2
                  title="Prediksi yang tepat untukmu"
                  description="impianmu menyediakan prediksi yang tepat untukmu. Tanpa harus mengikuti kuliah, bisa mengikuti kuliah secara online."
                  image="https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  author="John Lennon"
                />
                <LandingPageCard2
                  title="This is magical"
                  description="impianmu help you to find the right course for you. No need to do bullshit, you can study online."
                  image="https://images.unsplash.com/photo-1656306403547-dd26883b6fb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                  author="Jayson Hinrichsen"
                />
                <LandingPageCard2
                  title="It's all about you"
                  description="impianmu help you to find the right course for you. No need to do bullshit, you can study online."
                  image="https://images.unsplash.com/photo-1656328120588-606ec5e73678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  author="Jayson Hinrichsen"
                />
              </>
            )
          }
        </Flex>;
      </Container>
      <Container maxW={'7xl'} mb={10}>
        <Text>
          <Heading fontWeight={600} textAlign="center" margin={'10'}>
            Our Features
          </Heading>
        </Text>
        <Center>
          {isMobile ? (
            <Container>
              <Flex
                direction={'column'}
                justify={'center'}
                align={'center'}
                mb={10}
                maxW={'640px'}
              >
                <LandingPageCard
                  titleFeature={'Pencarian Minat dan Bakat Impianmu'}
                  imageFeature={
                    'https://images.unsplash.com/photo-1598160882026-6e61d16dc8c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                  }
                />
                <LandingPageCard
                  titleFeature={'Pencarian Beasiswa dan Universitas'}
                  imageFeature={
                    'https://images.unsplash.com/photo-1655070748916-75871ab03c87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
                  }
                />
                <LandingPageCard
                  titleFeature={'Prediksi Jurusan dan Universitas'}
                  imageFeature={
                    'https://images.unsplash.com/photo-1654778747238-12314fb5a4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                  }
                />
              </Flex>
            </Container>
          ) : (
            <Container
              maxW={'4xl'}
            >
              <Stack
                direction={'row'}
                justify={'center'}
                align={'center'}
              >
                <LandingPageCard
                  titleFeature={'Pencarian Minat dan Bakat Impianmu'}
                  imageFeature={
                    'https://images.unsplash.com/photo-1598160882026-6e61d16dc8c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                  }
                />
                <LandingPageCard
                  titleFeature={'Pencarian Beasiswa dan Universitas'}
                  imageFeature={
                    'https://images.unsplash.com/photo-1655070748916-75871ab03c87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
                  }
                />
                <LandingPageCard
                  titleFeature={'Prediksi Jurusan dan Universitas'}
                  imageFeature={
                    'https://images.unsplash.com/photo-1654778747238-12314fb5a4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                  }
                />
              </Stack>
            </Container>
          )}
        </Center>
      </Container>
      <Footer />
    </>
  );
}
