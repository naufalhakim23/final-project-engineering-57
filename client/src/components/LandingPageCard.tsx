import React from 'react';
import {
  Container,
  Box,
  Image,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
export default function LandingPageCard({ titleFeature, imageFeature }) {
  return (
    <Container mb={10}>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        overflow="hidden"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
          transition: 'all .2s ease-in-out',
          cursor: 'pointer',
        }}
      >
        <Image src={imageFeature} alt="auth" maxH={350} />

        <Box padding="6">
          <Box display="flex" alignItems="baseline">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
              ></Box>
            </Flex>
            <Flex justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                color={useColorModeValue('gray.800', 'white')}
              >
                <Box as="span" color={'gray.600'} fontSize="lg">
                  {titleFeature}
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
