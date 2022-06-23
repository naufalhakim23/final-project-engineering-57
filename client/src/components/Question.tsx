import React from 'react';
import { Box, Text, Center, Flex } from '@chakra-ui/react';

const Question = ({ id, question, answerFor }) => {
  return (
    <Box marginLeft={'2rem'} padding={'1rem'}>
      <Text fontSize={'2xl'} fontWeight={'600'} color={'black'} mb={'1rem'}>
        {id}. {question}
      </Text>
      <Center>
        <Flex direction={'row'}>
          <form>
            <input
              type="button"
              value="Yes"
              style={{
                backgroundColor: '#FFF',
                borderRadius: '10px',
                padding: '10px',
                marginRight: '1rem',
                color: 'black',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
              }}
              onClick={() => {
                alert('Yes');
              }}
            />
            <input
              type="button"
              value="No"
              style={{
                backgroundColor: '#FFF',
                borderRadius: '10px',
                padding: '10px',
                marginRight: '1rem',
                color: 'black',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
              }}
              onClick={() => {
                alert('No');
              }}
            />
          </form>
          {/* <Button
                                    variant={'outline'}
                                    size={'lg'}
                                    color={'black'}
                                    margin={5}
                                    width={'100px'}
                                >
                                    Yes
                                </Button>
                                <Button
                                    variant={'outline'}
                                    colorScheme={'teal'}
                                    size={'lg'}
                                    color={'black'}
                                    margin={5}
                                    width={'100px'}
                                >
                                    No
                                </Button> */}
        </Flex>
      </Center>
    </Box>
  );
};

export default Question;
