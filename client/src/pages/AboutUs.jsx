import React from 'react';
import {
    Box,
    SimpleGrid,
    Text,
    Heading,
    Image,

} from '@chakra-ui/react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

const AboutUs = () => {
    return (
        <>
            <Header />
            <Box
                shadow="xl"
                bg="white"
                _dark={{
                    bg: "gray.800",
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
                    <Box
                        alignSelf={'center'}

                    >
                        <Text
                            mb={5}
                            textAlign={{
                                base: "center",
                                sm: "left",
                            }}
                            color="gray.600"
                            _dark={{
                                color: "gray.400",
                            }}
                            fontSize={{
                                base: "2xl",
                                md: "4xl",
                            }}
                        >
                            Welcome to impianmu. <br />
                            A place to find your next dream major and university.
                            We tried to make the process of finding your next dream major and university as easy as possible.
                        </Text>
                    </Box>
                    <Box
                        w="full"
                        h="full"
                    >
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
                            base: "initial",
                            md: 2,
                        }}
                    >
                        <Heading
                            mb={4}
                            fontSize={{
                                base: "2xl",
                                md: "4xl",
                            }}
                            fontWeight="extrabold"
                            letterSpacing="tight"
                            textAlign={{
                                base: "center",
                                md: "left",
                            }}
                            color="gray.900"
                            _dark={{
                                color: "gray.400",
                            }}
                            lineHeight={{
                                md: "shorter",
                            }}
                        >
                            About Us
                        </Heading>
                        <Text
                            mb={5}
                            textAlign={{
                                base: "center",
                                sm: "left",
                            }}
                            color="gray.600"
                            _dark={{
                                color: "gray.400",
                            }}
                            fontSize={{
                                md: "lg",
                            }}
                        >
                            Since 2022, we have been working to make the process of finding your next dream major and university as easy as possible. <br />
                            We are a team of students who are dedicated to making the process of finding your next dream major and university as easy as possible for you.
                            Because we believe that the process of finding your next dream major and university is the most important part of your life.
                        </Text>
                    </Box>
                    <Box
                        w="full"
                        h="full"
                    >
                        <Image
                            src="./assets/images/placeholderAboutUs2.jpg"
                            alt="placeholder2"
                        />
                    </Box>
                </SimpleGrid>

            </Box>
            <Footer />

        </>
    );
};

export default AboutUs;