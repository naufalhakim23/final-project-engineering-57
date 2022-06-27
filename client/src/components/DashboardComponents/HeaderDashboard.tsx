import React, { useEffect, useState } from 'react';
import {
  chakra,
  Flex,
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
const HeaderDashboard = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const fullName = `${sessionStorage.getItem(
    'firstName'
  )} ${sessionStorage.getItem('lastName')}`;

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, []);
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
              <Avatar size="sm" src="./assets/images/Impianmu.png" />

              <VisuallyHidden>impianmu</VisuallyHidden>
            </Link>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              impianmu
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            {isLoggedIn ? (
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
                  <Link to="/test">
                    <Button variant="ghost" fontWeight={500}>
                      Test RIASEC
                    </Button>
                  </Link>
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
                        {fullName}
                      </Text>
                    </Box>
                  </MenuButton>
                  <MenuList>
                    <Link to={'/'}>
                      <MenuItem>
                        <Text fontSize="sm" fontWeight="500" color="black">
                          Your Dashboard
                        </Text>
                      </MenuItem>
                    </Link>
                    <Link to={'/settings'}>
                      <MenuItem>
                        <Text fontSize="sm" fontWeight="500" color="black">
                          Account Settings
                        </Text>
                      </MenuItem>
                    </Link>
                    <Link to={'/landing-page'}>
                      <MenuItem
                        onClick={() => {
                          sessionStorage.removeItem('token');
                          sessionStorage.removeItem('login-status');
                          setisLoggedIn(false);
                        }}
                      >
                        <Text fontSize="sm" fontWeight="500" color="black">
                          Logout
                        </Text>
                      </MenuItem>
                    </Link>
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
                  <Link to={'/about-us'}>
                    <Button variant="ghost" fontWeight={500}>
                      About Us
                    </Button>
                  </Link>
                  <Link to={'/meet-the-team'}>
                    <Button variant="ghost" fontWeight={500}>
                      Meet the Team
                    </Button>
                  </Link>
                </HStack>
                <Link to={'/sign-in'}>
                  <Button
                    fontSize={'sm'}
                    fontWeight={400}
                    bg={'none'}
                    color={'#00D563'}
                    onClick={() => setisLoggedIn(true)}
                  >
                    <Text fontSize="sm" fontWeight="500">
                      Sign In
                    </Text>
                  </Button>
                </Link>
                <Link to={'/sign-up'}>
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
                    Sign Up
                  </Button>
                </Link>
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
