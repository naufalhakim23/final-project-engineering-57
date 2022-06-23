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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


import SimpleFooter from '../components/SimpleFooter.tsx';
export default function SignUp() {
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
                        <Stack isInline>
                            <FormControl id="NamaAwal">
                                <FormLabel>Nama Awal</FormLabel>
                                <Input type="NamaAwal" />
                            </FormControl>
                            <FormControl id="NamaAkhir">
                                <FormLabel>Nama Akhir</FormLabel>
                                <Input type="NamaAkhir" />
                            </FormControl>
                        </Stack>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={5}>
                            <Button
                                bg={'#00D563'} color={'white'} variant={'solid'}
                            >
                                Sign Up
                            </Button>
                            <Text color={'blue.500'}>
                                <Link to={'/sign-in'}>Sudah Punya akun? Log-In</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
            <SimpleFooter />
        </>
    )
}