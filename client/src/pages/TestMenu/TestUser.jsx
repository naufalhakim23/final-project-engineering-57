import React, { useEffect, useState } from 'react';
import HeaderDashboard from '../../components/DashboardComponents/HeaderDashboard.tsx';
import Footer from '../../components/Footer.tsx';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Question from '../../components/Question';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../api/config';
const TestUser = () => {
    const [question, setQuestion] = useState(null);
    // const [answerFor, setAnswerFor] = useState(null); still not sure about this
    const getQuestion = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: `${API_URL}/test/questions`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            });
            setQuestion(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: 'POST',
                url: 'http://localhost:3001/api/test/answer',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                },
                data: {
                    // answer: answerFor
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getQuestion();
    }
        , []);
    return (
        <>
            <HeaderDashboard />
            <pre>
                {/* {JSON.stringify(question, null, 2)}/ */}
            </pre>
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
                    <form onSubmit={handleSubmit}
                    >
                        {question && question.map((item, index) => {
                            return (
                                <Question
                                    id={item.id}
                                    question={item.question}
                                    answerFor={item.answerFor}
                                    key={index}
                                />
                            )
                        })}
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
                    </form>
                </Flex>
            </Box >
            <Footer />
        </>
    );
};

export default TestUser;