import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Heading,
  Container,
  VStack,
  Center,
  HStack,
  Image,
  Spacer,
} from '@chakra-ui/react';



export default function Soal() {
  return (
    <>
      <Flex
        w={'full'}
        h={'75vh'}
        backgroundColor= {'green.100'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        mb={10}
      >
        <Container maxW={'xl'} mt={20}>
          <Stack
            align={'center'}
            spacing={{ base: 200, md: 10 }}
            py={{ base: 10, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Box
              bg={'white'}
              maxW="lg"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              blur={'lg'}
            >
              <Heading
                lineHeight={1.1}
                fontWeight={200}
                fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}
                color="black"
                mb={4}
                mt={4}
                ml={2}
                textAlign="center"
              >
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '40%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'red.400',
                    zIndex: -1,
                  }}
                >
                  RIASEC QUESTION
              </Text>
              </Heading>
              <Text fontSize={'lg'} textAlign="left" mb={4} ml={2}>
                Apakah kamu suka membuat sesuatu?
              </Text>
              <Button
                mb={5}
                backgroundColor="#00D563"
                width="250px"
                borderRadius="15px"
              >
                <Text fontSize={'lg'} color="white">
                  Yes
                </Text>
              </Button>
              <Button
                mb={5}
                backgroundColor="#00D563"
                width="250px"
                borderRadius="15px"
              >
                <Text fontSize={'lg'} color="white">
                  No
                </Text>
              </Button>
            </Box>
          </Stack>
        </Container>
      </Flex>

      <Flex
        w={'full'}
        h={'75vh'}
        backgroundColor= {'green.100'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        mb={10}
      >
        <Container maxW={'xl'} mt={20}>
          <Stack
            align={'center'}
            spacing={{ base: 200, md: 10 }}
            py={{ base: 10, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Box
              bg={'white'}
              maxW="lg"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              blur={'lg'}
            >
              <Heading
                lineHeight={1.1}
                fontWeight={200}
                fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}
                color="black"
                mb={4}
                mt={4}
                ml={2}
                textAlign="center"
              >
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '40%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'red.400',
                    zIndex: -1,
                  }}
                >
                  RIASEC QUESTION
              </Text>
              </Heading>
              <Text fontSize={'lg'} textAlign="left" mb={4} ml={2}>
                Apakah kamu suka membuat sesuatu?
              </Text>
              <Button
                mb={5}
                backgroundColor="#00D563"
                width="250px"
                borderRadius="15px"
              >
                <Text fontSize={'lg'} color="white">
                  Yes
                </Text>
              </Button>
              <Button
                mb={5}
                backgroundColor="#00D563"
                width="250px"
                borderRadius="15px"
              >
                <Text fontSize={'lg'} color="white">
                  No
                </Text>
              </Button>
            </Box>
          </Stack>
        </Container>
      </Flex>

      <Flex
        w={'full'}
        h={'75vh'}
        backgroundColor= {'green.100'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        mb={10}
      >
        <Container maxW={'xl'} mt={20}>
          <Stack
            align={'center'}
            spacing={{ base: 200, md: 10 }}
            py={{ base: 10, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Box
              bg={'white'}
              maxW="lg"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              blur={'lg'}
            >
              <Heading
                lineHeight={1.1}
                fontWeight={200}
                fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}
                color="black"
                mb={4}
                mt={4}
                ml={2}
                textAlign="center"
              >
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '40%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'red.400',
                    zIndex: -1,
                  }}
                >
                  RIASEC QUESTION
              </Text>
              </Heading>
              <Text fontSize={'lg'} textAlign="left" mb={4} ml={2}>
                Apakah kamu suka membuat sesuatu?
              </Text>
              <Button
                mb={5}
                backgroundColor="#00D563"
                width="250px"
                borderRadius="15px"
              >
                <Text fontSize={'lg'} color="white">
                  Yes
                </Text>
              </Button>
              <Button
                mb={5}
                backgroundColor="#00D563"
                width="250px"
                borderRadius="15px"
              >
                <Text fontSize={'lg'} color="white">
                  No
                </Text>
              </Button>
            </Box>
          </Stack>
        </Container>
      </Flex>
    
    </>
  );
}



