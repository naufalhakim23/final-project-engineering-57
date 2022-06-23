import React from 'react';
import { Box, Image, Flex, Text, Heading, Button } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const CardColumn = ({
  departement,
  className,
  university,
  semester,
  image,
  alt,
  description,
  linkClass,
  onClick,
}) => {
  return (
    <div>
      <Box marginLeft={'2rem'} padding={'1rem'}>
        <Text
          fontSize={'md'}
          fontWeight={'600'}
          color={'black'}
          marginBottom={'1rem'}
        >
          {university}: {departement}
        </Text>
        <Flex direction={'column'} marginTop={'3'}>
          <Box
            marginLeft={'10'}
            marginRight={'10'}
            bg="white"
            _dark={{
              bg: 'gray.800',
            }}
            shadow="lg"
            rounded="sm"
            overflow="hidden"
            height={'200'}
          >
            <Flex direction={'row'} alignItems={'center'} padding={'1rem'}>
              <Image
                src={image}
                alt={alt}
                height={'150'}
                objectFit="cover"
                rounded={'lg'}
              />
              <Box marginLeft={'1rem'} width={'100%'} flexDirection={'column'}>
                <Heading
                  fontSize={'md'}
                  fontWeight={'200'}
                  color={'black'}
                  marginBottom={'1rem'}
                >
                  {departement} | {semester}
                </Heading>
                <Text fontSize={'xl'} fontWeight={'800'} color={'#00D563'}>
                  <Link to={linkClass}>{className}</Link>
                </Text>
                <Text fontSize={'md'} fontWeight={'200'} color={'black'}>
                  {description}
                </Text>
              </Box>
              <Box
                flexDirection={'column'}
                marginLeft={'1rem'}
                marginRight={'1rem'}
                textAlign={'center'}
              >
                <Button
                  backgroundColor={'#00D563'}
                  size="lg"
                  color={'white'}
                  marginBottom={'10px'}
                  width={'100%'}
                  onClick={onClick}
                >
                  Mulai Kelas Ini <FiArrowRight />
                </Button>
                <Button variant={'ghost'} size="sm" marginBottom={'1rem'}>
                  Reset deadline
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default CardColumn;
