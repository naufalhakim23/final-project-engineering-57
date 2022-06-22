import React from 'react';
import Header from '../../components/Header.tsx';
import Footer from '../../components/Footer.tsx';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import DashboardCard from '../../components/DashboardComponents/DashboardCard.tsx';
import { Link, } from 'react-router-dom';
import CardColumn from '../../components/DashboardComponents/CardColumn.tsx';

const DashboardInProgress = () => {
    return (
        <>
            <Header />
            <Box
                backgroundColor={'#00D56373'}
                width={'100%'}
                padding={'1rem'}

            >
                <Flex
                >
                    <Box
                        background={'#FFFFFFB3'}
                        maxWidth={'30%'}
                        paddingLeft={'1.25rem'}
                        paddingRight={'1.25rem'}
                        paddingTop={'1rem'}
                        paddingBottom={'1rem'}
                        borderRadius={'10px'}
                        boxShadow={'0px 0px 10px rgba(0,0,0,0.1)'}
                        textAlign={'center'}
                        marginLeft={'2rem'}
                    >
                        <Text
                            fontSize={'2xl'}
                            fontWeight={'600'}
                            color={'black'}
                        >
                            Selamat datang kembali!
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <Flex
                background={'#FFFFFF'}
                width={'100%'}
                padding={'1.5rem'}
            >
                <HStack
                    spacing={'1rem'}
                    marginLeft={'2rem'}
                >
                    <Link to={"/home"} >
                        <Text
                            _hover={{ color: '#00D56373' }}
                        >
                            Home
                        </Text>
                    </Link>
                    <Link to={"/in-progress"} >
                        <Text>
                            In-Progress
                        </Text>
                    </Link>
                    <Link to={"/completed"} >
                        <Text>
                            Completed
                        </Text>
                    </Link>
                </HStack>
            </Flex>
            <Flex
                background={'#00D5631A'}
                width={'100%'}
                padding={'1.5rem'}
                direction={'column'}
            >
                {/* Card In Progress -- Soon tobe Components*/}
                <CardColumn
                    departement={'Informatics'}
                    className={'Algorithm and Data Structure'}
                    university={'Universitas Indonesia'}
                    semester={'Semester 3'}
                    image={'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
                    linkClass={'/'}
                    alt={'universitas indonesia'}
                    description={'It looks like you missed some important deadlines. Reset your deadlines and get started today.'}
                    onClick={() => { }}
                />
                <CardColumn
                    departement={'Informatics'}
                    className={'Calculus'}
                    university={'Universitas Indonesia'}
                    semester={'Semester 3'}
                    image={'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
                    linkClass={'/'}
                    alt={'universitas indonesia'}
                    description={'You are almost there, just few more step to finish class.'}
                    onClick={() => { }}
                />
                <Box
                    marginLeft={'2rem'}
                    padding={'1rem'}
                >
                    <Text
                        fontSize={'lg'}
                        fontWeight={'600'}
                        color={'black'}
                        mb={'1rem'}
                    >
                        Kelas yang mungkin anda sukai
                    </Text>
                    <Flex direction={'row'} margin={'0'}>
                        <DashboardCard
                            image={'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
                            alt={'placeholder'}
                            subject={'React Native Class'}
                            description={'React Native Class with Jason Momoa and the best instructors in the world.'}

                        />
                        <DashboardCard
                            image={'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
                            alt={'placeholder'}
                            subject={'React Native Class'}
                            description={'React Native Class with Jason Momoa and the best instructors in the world.'}

                        />
                        <DashboardCard
                            image={'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
                            alt={'placeholder'}
                            subject={'React Native Class'}
                            description={'React Native Class with Jason Momoa and the best instructors in the world.'}

                        />
                    </Flex>
                </Box>
            </Flex>
            <Footer />
        </>
    );
};

export default DashboardInProgress;