import React from 'react';
import { Box, Center, Heading, Text, Flex, Grid, SimpleGrid, useMediaQuery } from '@chakra-ui/react';
import DeveloperCard from '../components/DeveloperCard.tsx';
import HeaderDashboard from '../components/DashboardComponents/HeaderDashboard.tsx';
import Footer from '../components/Footer.tsx';

const MeetTeam = () => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');
    return (<>

        <HeaderDashboard />
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
            <SimpleGrid>
                <Box>
                    <Center>
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
                            <Text fontSize={{
                                base: 'lg',
                                md: 'xl',
                            }}
                                fontWeight="light"
                                color="gray.600"
                                lineHeight={{
                                    md: 'shorter',
                                }}
                                textAlign={{
                                    base: 'center',
                                    md: 'left',
                                }}
                                mb={5}
                            >
                                We are a team of developers who are passionate about building great products. This is the team that is responsible for the development of the website.
                            </Text>
                        </Box>
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
                                    role={'Front-End Developer'}
                                    ig={'@kimiskim'}
                                    linkedIn={'https://www.linkedin.com/in/naufal-al-hakim'}
                                    github={'https://github.com/naufalhakim23'}
                                    image={'./assets/developerAvatar/profile-photo-naufal-al-hakim.jpg'}
                                />
                                <DeveloperCard
                                    name={'M. Elrico Afdila'}
                                    role={'Front-End Developer'}
                                    ig={'@elrico'}
                                    linkedIn={'https://www.linkedin.com/m-elrico-afdila-788782233/'}
                                    github={'https://github.com/ElricoAf'}
                                    image={'./assets/developerAvatar/profile-photo-m-elrico.jpg'}
                                />
                                <DeveloperCard
                                    name={'Almira Aurora P.'}
                                    role={'Front-End Developer'}
                                    ig={'@almiraaurora'}
                                    linkedIn={'https://www.linkedin.com/in/almira-aurora-prameswaty/'}
                                    github={''}
                                    image={'./assets/developerAvatar/profile-photo-almira-aurora-p.jpg'}
                                />
                                <DeveloperCard
                                    name={'Dimas Ahmad N.'}
                                    role={'Back-End Developer'}
                                    ig={'@dimasahmadn'}
                                    linkedIn={'https://www.linkedin.com/in/dimas-ahmad-nur-kholis-suhermanto-480215222/'}
                                    github={'https://github.com/dimasank'}
                                    image={'./assets/developerAvatar/profile-photo-dimas-ahmad-n.jpg'}
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
                        ) : (
                            <Grid templateColumns={'repeat(3, minmax(200px, 1fr))'} className="meet-the-team">
                                <DeveloperCard
                                    name={'Naufal Al-Hakim'}
                                    role={'Front-End Developer'}
                                    ig={'@kimiskim'}
                                    linkedIn={'https://www.linkedin.com/in/naufal-al-hakim'}
                                    github={'https://github.com/naufalhakim23'}
                                    image={'./assets/developerAvatar/profile-photo-naufal-al-hakim.jpg'}
                                />
                                <DeveloperCard
                                    name={'M. Elrico Afdila'}
                                    role={'Front-End Developer'}
                                    ig={'@elrico'}
                                    linkedIn={'https://www.linkedin.com/m-elrico-afdila-788782233/'}
                                    github={'https://github.com/ElricoAf'}
                                    image={'./assets/developerAvatar/profile-photo-m-elrico.jpg'}
                                />
                                <DeveloperCard
                                    name={'Almira Aurora P.'}
                                    role={'Front-End Developer'}
                                    ig={'@almiraaurora'}
                                    linkedIn={'https://www.linkedin.com/in/almira-aurora-prameswaty/'}
                                    github={''}
                                    image={'./assets/developerAvatar/profile-photo-almira-aurora-p.jpg'}
                                />
                                <DeveloperCard
                                    name={'Dimas Ahmad N.'}
                                    role={'Back-End Developer'}
                                    ig={'@dimasahmadn'}
                                    linkedIn={'https://www.linkedin.com/in/dimas-ahmad-nur-kholis-suhermanto-480215222/'}
                                    github={'https://github.com/dimasank'}
                                    image={'./assets/developerAvatar/profile-photo-dimas-ahmad-n.jpg'}
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
        </Box >
        <Footer />
    </>
    );
};

export default MeetTeam;