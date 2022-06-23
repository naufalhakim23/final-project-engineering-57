import React from 'react';
import {
  chakra,
  Flex,
  Image,
  Button,
  HStack,
  VStack,
  Box,
  IconButton,
  VisuallyHidden,
  useDisclosure,
  useColorModeValue,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const HeaderDashboard = ({ fullName }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Link to={'/'}>
              {/* Changeit to logo */}
              <Avatar
                size="sm"
                src="https://www.choc.com/wcsstore/GlobalAssets/images/logo/choc-logo-white.svg"
              />
              <VisuallyHidden>Choc</VisuallyHidden>
            </Link>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Choc
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            {isSignedIn ? (
              <>
                <HStack
                  spacing={1}
                  mr={1}
                  color="brand.500"
                  display={{
                    base: 'none',
                    md: 'inline-flex',
                  }}
                >
                  <Button variant="ghost" fontWeight={500}>
                    Test RIASEC
                  </Button>
                  <Button variant="ghost" fontWeight={500}>
                    Universitas
                  </Button>
                  <Button variant="ghost" fontWeight={500}>
                    Beasiswa
                  </Button>
                  <Button variant="ghost" fontWeight={500}>
                    Cari Karirmu
                  </Button>
                  <Button variant="ghost" fontWeight={500}>
                    Kelas Lainnya
                  </Button>
                </HStack>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded="full"
                    variant="link"
                    minW={0}
                    cursor="pointer"
                    _hover={{
                      bg: 'transparent',
                      color: 'brand.500',
                    }}
                    _active={{
                      bg: 'transparent',
                      color: 'brand.500',
                    }}
                  >
                    <Box
                      display={{
                        base: 'none',
                        md: 'inline-flex',
                      }}
                      alignItems="center"
                    >
                      <Avatar
                        size="sm"
                        src="https://www.choc.com/wcsstore/GlobalAssets/images/logo/choc-logo-white.svg"
                        marginRight={2}
                      />
                      <Text fontSize="sm" fontWeight="500" color="black">
                        {fullName} Naufal Al-Hakim
                      </Text>
                    </Box>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link to={'/'}>
                        <Text fontSize="sm" fontWeight="500" color="black">
                          Your Dashboard
                        </Text>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to={'/settings'}>
                        <Text fontSize="sm" fontWeight="500" color="black">
                          Account Settings
                        </Text>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to={'/logout'}>
                        <Text fontSize="sm" fontWeight="500" color="black">
                          Logout
                        </Text>
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <>
                <HStack
                  spacing={1}
                  mr={1}
                  color="brand.500"
                  display={{
                    base: 'none',
                    md: 'inline-flex',
                  }}
                >
                  <Button variant="ghost" fontWeight={500}>
                    <Link to={'/about-us'}>About Us</Link>
                  </Button>
                  <Button variant="ghost" fontWeight={500}>
                    <Link to={'/meet-the-team'}>Meet the Team</Link>
                  </Button>
                </HStack>
                <Button
                  fontSize={'sm'}
                  fontWeight={400}
                  bg={'none'}
                  color={'#00D563'}
                  onClick={() => setIsSignedIn(true)}
                >
                  <Link to={'/sign-in'}>
                    <Text fontSize="sm" fontWeight="500">
                      Sign In
                    </Text>
                  </Link>
                </Button>
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'sm'}
                  fontWeight={600}
                  color={'white'}
                  bg={'#00D563'}
                  _hover={{
                    bg: 'gray.700',
                  }}
                >
                  <Link to={'/sign-up'}>Sign Up</Link>
                </Button>
              </>
            )}

            <Box
              display={{
                base: 'inline-flex',
                md: 'none',
              }}
            >
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w={'full'} variant="ghost" fontWeight={500}>
                  Test RIASEC
                </Button>
                <Button w={'full'} variant="ghost" fontWeight={500}>
                  Universitas
                </Button>
                <Button w={'full'} variant="ghost" fontWeight={500}>
                  Beasiswa
                </Button>
                <Button w={'full'} variant="ghost" fontWeight={500}>
                  Cari Karirmu
                </Button>
                <Button w={'full'} variant="ghost" fontWeight={500}>
                  Kelas Lainnya
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default HeaderDashboard;
