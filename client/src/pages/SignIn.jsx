import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Text,
    Center,
    Container,
    Divider,
    Icon
} from '@chakra-ui/react';


import SimpleFooter from '../components/SimpleFooter.tsx';
export default function SignIn() {
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
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={5}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.500'}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'#00D563'} color={'white'} variant={'solid'}
                            >
                                Sign in
                            </Button>
                            <Text>
                                Don't have an account?
                                <Link href='/sign-Up' color={'blue.500'}>Sign up</Link>
                            </Text>
                           

                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
            <SimpleFooter />
        </>
    )
}