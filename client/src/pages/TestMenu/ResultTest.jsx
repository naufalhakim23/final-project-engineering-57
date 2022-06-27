import React from 'react';
import HeaderDashboard from '../../components/DashboardComponents/HeaderDashboard.tsx';
import Footer from '../../components/Footer.tsx';
import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const ResultTest = () => {

    return (
        <>
            <HeaderDashboard />
            <Box
                backgroundColor={'#00D56373'}
                width={'100%'}
                padding={'1rem'}
            >
                <Flex
                    background={'#FFF'}
                    borderRadius={'10px'}
                    width={'100%'}
                    padding={'1.5rem'}
                    direction={'column'}
                >
                    <Heading
                        fontSize={'2xl'}
                        fontWeight={'600'}
                        color={'black'}
                        margin={5}
                    >
                        RIASEC Test Result
                    </Heading>
                    <Flex
                        direction={'column'}
                        justifyContent={'space-between'}
                        width={'100%'}
                        padding={'1rem'}
                    >
                        <Heading
                            fontSize={'lg'}
                            fontWeight={'600'}
                            color={'black'}
                            margin={5}
                        >
                            You are: Realistic

                        </Heading>
                        <Text
                            fontSize={'lg'}
                            marginLeft={5}
                        >
                            These people are often good at mechanical or athletic jobs
                        </Text>
                    </Flex>
                    <Flex
                        direction={'column'}
                        justifyContent={'space-between'}
                        width={'100%'}
                        padding={'1rem'}
                    >
                        <Heading
                            fontSize={'lg'}
                            fontWeight={'600'}
                            color={'black'}
                            margin={5}
                        >
                            Departement YOU should study:
                        </Heading>
                        <Text
                            fontSize={'lg'}
                            marginLeft={5}
                        >
                            <li>
                                Agriculture
                            </li>
                            <li>
                                Health Assistant
                            </li>
                            <li>
                                Computers
                            </li>
                            <li>
                                Construction
                            </li>
                            <li>
                                Mechanic
                            </li>
                            <li>
                                Machinist
                            </li>
                            <li>
                                Engineering
                            </li>
                            <li>
                                Food and Hospitality
                            </li>
                        </Text>
                    </Flex>
                    <Box
                        alignItems={'right'}
                        justifyContent={'right'}
                        display={'flex'}
                        marginTop={'1rem'}
                        width={'100%'}
                    >
                        <Link to={'/home'}>
                            <Button
                                background={'#00D56373'}
                                color={'#FFF'}
                                fontSize={'1rem'}
                                fontWeight={'600'}
                                borderRadius={'10px'}
                                padding={'1rem'}
                                margin={'1rem'}
                                _hover={{ background: '#FFF', color: '#00D56373' }}
                                _active={{ background: '#00D56373' }}
                            >
                                Kembali
                            </Button>
                        </Link>
                    </Box>
                </Flex>
            </Box >
            <Footer />
        </>
    );
};

export default ResultTest;