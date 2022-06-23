import React from 'react';
import HeaderDashboard from '../../components/DashboardComponents/HeaderDashboard.tsx';
import Footer from '../../components/Footer.tsx';
import { Box, Flex, Heading } from '@chakra-ui/react';
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
                        Hasil Tes RIASEC
                    </Heading>
                </Flex>
            </Box >
            <Footer />
        </>
    );
};

export default ResultTest;