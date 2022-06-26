import {
    Button,
    Checkbox,
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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import SimpleFooter from '../components/SimpleFooter.tsx';
import useStore from '../Store/useStore';
import jwt_decode from 'jwt-decode';
export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const updateisLoggedInGlobal = useStore(state => state.updateisLoggedInGlobal);

    const signIn = async () => {
        try {
            const response = await axios({
                method: 'POST',
                url: 'http://localhost:3001/api/auth/login/',
                data: {
                    email: email,
                    password: password,
                },
            });
            sessionStorage.setItem('token', response.data.token);
            if (sessionStorage.getItem('token')) {
                updateisLoggedInGlobal(true);
                const decoded = jwt_decode(sessionStorage.getItem('token'));
                sessionStorage.setItem('id', decoded.id);
                sessionStorage.setItem('firstName', decoded.firstName);
                sessionStorage.setItem('lastName', decoded.lastName);
            }
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    const setTimer = () => {
        setTimeout(() => {
            window.location = '/';
        }, 2000);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signIn();
        setTimer();
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
                                >Masuk Akun</Heading>
                                <Text
                                    fontSize={'md'}
                                    fontWeight={'300'}
                                >
                                    Masukkan email dan kata sandi Anda untuk masuk dan mulai menggunakan akun Impianmu.
                                </Text>
                            </Container>
                        </Center>
                        <form
                            onSubmit={handleSubmit}
                        >
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </FormControl>
                            <Stack spacing={5}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox
                                        name="remember"
                                        label="Ingat saya"
                                        checked={remember}
                                        onChange={() => setRemember(!remember)}

                                    >Remember me</Checkbox>
                                </Stack>
                                <Button
                                    bg={'#00D563'} color={'white'} variant={'solid'}
                                    type="submit"

                                >
                                    Sign in
                                </Button>
                                <Text>
                                    Don't have an account?
                                    <Link to='/sign-Up'>
                                        Sign up
                                    </Link>
                                </Text>
                            </Stack>
                        </form>
                    </Stack>
                </Flex>
            </Stack>
            <SimpleFooter />
        </>
    )
}