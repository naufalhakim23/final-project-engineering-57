import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const DeveloperCard = ({ name, ig, role, linkedIn, github, image }) => {
  return (
    <>
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
        >
          <Avatar
            size={'xl'}
            src={image}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {ig}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            {role}
          </Text>

          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
              _active={{ bg: 'blue.600' }}
              onClick={() => {
                window.open(linkedIn, '_blank');
              }}
            >
              <FiLinkedin />
              LinkedIn
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'black'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={() => {
                window.open(github, '_blank');
              }}
            >
              <FiGithub />
              Github
            </Button>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default DeveloperCard;
