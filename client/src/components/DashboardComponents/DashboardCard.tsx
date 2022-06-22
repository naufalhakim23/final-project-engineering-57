import React from 'react';
import { Box, Image, chakra } from '@chakra-ui/react';

const DashboardCard = ({ image, alt, subject, description }) => {
  return (
    <Box
      w="sm"
      marginLeft={'10'}
      bg="white"
      _dark={{
        bg: 'gray.800',
      }}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
        transition: 'all .2s ease-in-out',
        cursor: 'pointer',
      }}
    >
      <Image
        w="full"
        h={56}
        fit="cover"
        objectPosition="center"
        src={image}
        alt={alt}
      />
      <Box py={4} px={6}>
        <chakra.h1
          fontSize="xl"
          fontWeight="bold"
          color="gray.800"
          _dark={{
            color: 'white',
          }}
        >
          {subject}
        </chakra.h1>

        <chakra.p
          py={2}
          color="gray.700"
          _dark={{
            color: 'gray.400',
          }}
        >
          {description}
        </chakra.p>
      </Box>
    </Box>
  );
};

export default DashboardCard;
