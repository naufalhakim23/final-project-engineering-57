import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Text,
    Center,
    Container,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../api/config';


import SimpleFooter from '../components/SimpleFooter.tsx';
export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [registered, setRegistered] = useState(false);
    const [loading, setLoading] = useState(false);

    const addUser = async () => {
        try {
            const response = await axios({
                method: 'POST',
                url: `${API_URL}/auth/register/`,
                data: {
                    email: email,
                    password: password,
                    first_name: firstName,
                    last_name: lastName
                },
            })
            setRegistered(true);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    const loadingTimer = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addUser();
        loadingTimer();
    }
    return (
        <>
            <Stack maxH={'92vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex flex={2}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            './assets/images/auth-image.png'
                        }
                    />
                </Flex>
                <Flex p={7} flex={1} align={'center'} justify={'center'}
                >
                    <Stack spacing={4} w={'full'} maxW={'md'}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        padding={5}

                    >
                        <Center
                            margin={5}
                        >
                            <Container textAlign="center">
                                <Heading fontSize={'2xl'}
                                    fontWeight={'600'}
                                >Daftar Akun</Heading>
                                <Text
                                    fontSize={'md'}
                                    fontWeight={'300'}
                                >
                                    Isi identitasmu untuk membuat akun Impianmu.
                                </Text>
                            </Container>
                        </Center>
                        <form onSubmit={handleSubmit}>
                            <Stack isInline>
                                <FormControl id="NamaAwal" isRequired>
                                    <FormLabel>Nama Awal</FormLabel>
                                    <Input type="NamaAwal"
                                        placeholder="Nama Awal"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}

                                    />
                                </FormControl>
                                <FormControl id="NamaAkhir" isRequired>
                                    <FormLabel>Nama Akhir</FormLabel>
                                    <Input type="NamaAkhir"
                                        placeholder="Nama Akhir"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </FormControl>
                            </Stack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormControl>
                            <Stack spacing={5}>
                                <Button
                                    bg={'#00D563'} color={'white'} variant={'solid'}
                                    type="submit"
                                >
                                    Sign Up
                                </Button>
                                <Text color={'blue.500'}>
                                    Sudah Punya akun?
                                    <Link to={'/sign-in'}>
                                        Log-In
                                    </Link>
                                </Text>
                            </Stack>
                        </form>
                    </Stack>
                </Flex>
                {
                    registered ? (
                        <Modal isOpen={true}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>
                                    Selamat!
                                </ModalHeader>
                                <ModalBody>
                                    <Flex justify={'center'}
                                        align={'center'}
                                        direction={'column'}
                                    >
                                        <Text fontSize={'lg'}
                                            mb={3}
                                        >
                                            Akun anda telah terdaftar.
                                        </Text>
                                        {
                                            loading ? (
                                                <Button
                                                    bg={'#00D563'} color={'white'} variant={'solid'}
                                                    isLoading
                                                    loadingText='Loading'
                                                >
                                                    Log In
                                                </Button>
                                            ) : (
                                                <Link to={'/sign-in'}>
                                                    <Button
                                                        bg={'#00D563'} color={'white'} variant={'solid'}
                                                    >
                                                        Log In
                                                    </Button>
                                                </Link>
                                            )
                                        }
                                    </Flex>
                                </ModalBody>
                            </ModalContent>

                        </Modal>
                    ) : (
                        <></>
                    )
                }
            </Stack>
            <SimpleFooter />
        </>
    )
}