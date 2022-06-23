import React from 'react';
import HeaderDashboard from '../../components/DashboardComponents/HeaderDashboard.tsx';
import Footer from '../../components/Footer.tsx';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Question from '../../components/Question.tsx';
import { Link } from 'react-router-dom';
const TestUser = () => {
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
                        RIASEC Test
                    </Heading>
                    {/* Test Question and Answer Button for RIASEC Test buat conditional rendering*/}
                    {/* Mapping for Question from Backend */}
                    <Question
                        id={1}
                        question={'Apakah anda suka mengerjakan yang berbentuk nyata seperti mobil?'}
                    />
                    <Question
                        id={2}
                        question={'Apakah anda suka puzzle?'}
                    />
                    <Question
                        id={3}
                        question={'Apakah anda senang bekerja sendiri?'}
                    />
                    <Box
                        alignItems={'right'}
                        justifyContent={'right'}
                        display={'flex'}
                        marginTop={'1rem'}
                        width={'100%'}
                    >
                        <Link to={'/test/result'}>
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
                                Submit
                            </Button>
                        </Link>
                    </Box>
                </Flex>
            </Box >
            <Footer />
        </>
    );
};

export default TestUser;