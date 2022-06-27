import React from 'react';
import { Flex, Box, Link, Image, chakra } from '@chakra-ui/react';

const LandingPageCard2 = ({ title, description, image, author }) => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg="white"
        _dark={{
          bg: 'gray.800',
        }}
        maxW="2xl"
      >
        <Box mt={2}>
          <Link
            fontSize="2xl"
            color="gray.700"
            _dark={{
              color: 'white',
            }}
            fontWeight="700"
            _hover={{
              color: 'gray.600',
              _dark: {
                color: 'gray.200',
              },
              textDecor: 'underline',
            }}
          >
            {title}
          </Link>
          <chakra.p
            mt={2}
            color="gray.600"
            _dark={{
              color: 'gray.300',
            }}
          >
            {description}
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Flex alignItems="center">
            <Image
              mx={4}
              w={10}
              h={10}
              rounded="full"
              fit="cover"
              display={{
                base: 'none',
                sm: 'block',
              }}
              src={image}
              alt="avatar"
            />
            <Link
              color="gray.700"
              _dark={{
                color: 'gray.200',
              }}
              fontWeight="700"
              cursor="pointer"
            >
              {author}
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default LandingPageCard2;
