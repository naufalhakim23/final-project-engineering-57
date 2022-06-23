import React from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  Heading,
  Image,
  Center,
  Flex,
  Grid,
  useMediaQuery,
} from '@chakra-ui/react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import DeveloperCard from '../components/DeveloperCard.tsx';

const AboutUs = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <Header />
      <Box
        shadow="xl"
        bg="white"
        _dark={{
          bg: 'gray.800',
        }}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="start"
          columns={{
            base: 1,
            md: 2,
          }}
          mb={0}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box alignSelf={'center'}>
            <Text
              mb={5}
              textAlign={{
                base: 'center',
                sm: 'left',
              }}
              color="gray.600"
              _dark={{
                color: 'gray.400',
              }}
              fontSize={{
                base: '2xl',
                md: '4xl',
              }}
            >
              Welcome to impianmu. <br />A place to find your next dream major
              and university. We tried to make the process of finding your next
              dream major and university as easy as possible.
            </Text>
          </Box>
          <Box w="full" h="full">
            <Image
              src="./assets/images/placeholderAboutUs.jpg"
              alt="placeholder"
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2,
          }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box
            order={{
              base: 'initial',
              md: 2,
            }}
          >
            <Heading
              mb={4}
              fontSize={{
                base: '2xl',
                md: '4xl',
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{
                base: 'center',
                md: 'left',
              }}
              color="gray.900"
              _dark={{
                color: 'gray.400',
              }}
              lineHeight={{
                md: 'shorter',
              }}
            >
              About Us
            </Heading>
            <Text
              mb={5}
              textAlign={{
                base: 'center',
                sm: 'left',
              }}
              color="gray.600"
              _dark={{
                color: 'gray.400',
              }}
              fontSize={{
                md: 'lg',
              }}
            >
              Since 2022, we have been working to make the process of finding
              your next dream major and university as easy as possible. <br />
              We are a team of students who are dedicated to making the process
              of finding your next dream major and university as easy as
              possible for you. Because we believe that the process of finding
              your next dream major and university is the most important part of
              your life.
            </Text>
          </Box>
          <Box w="full" h="full">
            <Image
              src="./assets/images/placeholderAboutUs2.jpg"
              alt="placeholder2"
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid>
          <Box>
            <Center>
              <Heading
                mb={4}
                fontSize={{
                  base: '2xl',
                  md: '4xl',
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{
                  base: 'center',
                  md: 'left',
                }}
                color="gray.900"
                _dark={{
                  color: 'gray.400',
                }}
                lineHeight={{
                  md: 'shorter',
                }}
                id="meet-the-team"
              >
                Meet The Team
              </Heading>
            </Center>
            {/* <DeveloperCard /> */}
            {
              isMobile ? (
                <Flex
                  direction="column"
                  justify="center"
                  align="center"
                  mb={10}
                >
                  <DeveloperCard
                    name={'Naufal Al-Hakim'}
                    role={'Front-End Developer || Managing Director'}
                    ig={'@kimiskim'}
                    linkedIn={'https://www.linkedin.com/in/naufal-al-hakim'}
                    github={'https://github.com/naufalhakim23'}
                    image={'./assets/developerAvatar/profile-photo-naufal-al-hakim.jpg'}
                  />
                  <DeveloperCard
                    name={'Elang Bimantoro'}
                    role={'Front-End Developer'}
                    ig={'@elangbmntr'}
                    linkedIn={'https://www.linkedin.com/in/elang-bimantoro/'}
                    github={'https://github.com/'}
                    image={'./assets/developerAvatar/profile-photo-elang-bimantoro.jpg'}
                  />
                </Flex>
              ) : (<Grid templateColumns={'repeat(3, minmax(200px, 1fr))'} className="meet-the-team">
                <DeveloperCard
                  name={'Naufal Al-Hakim'}
                  role={'Front-End Developer'}
                  ig={'@kimiskim'}
                  linkedIn={'https://www.linkedin.com/in/naufal-al-hakim'}
                  github={'https://github.com/naufalhakim23'}
                  image={'./assets/developerAvatar/profile-photo-naufal-al-hakim.jpg'}
                />
                <DeveloperCard
                  name={'Elang Bimantoro'}
                  role={'Front-End Developer'}
                  ig={'@elangbmntr'}
                  linkedIn={'https://www.linkedin.com/in/elang-bimantoro/'}
                  github={'https://github.com/'}
                  image={'./assets/developerAvatar/profile-photo-elang-bimantoro.jpg'}
                />
              </Grid>)
            }
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
};

export default AboutUs;
