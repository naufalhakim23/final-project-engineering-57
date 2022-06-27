import {
  Box,
  Container,
  Spacer,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box bg="#301E4E" color={'white'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
          alignItems={'flex-start'}
        >
          <Stack spacing={6}>
            <Flex
              fontSize={'2xl'}
              fontWeight={'bold'}
              color={'whiteAlpha.900'}
              flexDirection={'row'}
              alignItems={'center'}
            >
              <Image src="./assets/images/Impianmu.png" alt="logo" width={50} />
              <Text marginLeft={'3'}>impianmu</Text>
            </Flex>
            <Text fontSize={'sm'}>© 2022 Impianmu. All rights reserved</Text>
          </Stack>
          <Spacer />
        </SimpleGrid>
        <Container as={Stack} maxW={'6xl'} py={4} alignItems={'flex-end'}>
          <Stack direction={'row'} spacing={6}>
            <Link to={'/'}>Home</Link>
            <Link to={'/about-us'}>About Us</Link>
            <Link to={'/meet-the-team'}>Meet The Team</Link>
          </Stack>
        </Container>
      </Container>
    </Box>
  );
}
