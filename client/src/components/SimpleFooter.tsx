import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function SimpleFooter() {
  return (
    <Box bg={'white'} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6}>
          <Link to={'/'}>Home</Link>
          <Link to={'/about-us'}>About Us</Link>
          <Link to={'/meet-the-team'}>Meet The Team</Link>
        </Stack>
        <Text>© 2022 Impianmu. All rights reserved</Text>
      </Container>
    </Box>
  );
}
