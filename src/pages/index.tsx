/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Logo from "../components/Logo";
import { HiUser, HiLockClosed } from "react-icons/hi";
import { BannerHome } from "../components/BannerHome";

const Home: NextPage = () => {
  return (
    <>
      <Flex
        w="100%"
        h="100%"
        align="center"
        justify="space-between"
        p="8"
        maxWidth="1400"
        mx="auto"
      >
        <Flex w="100%" justify="center" direction="column">
          <Logo />
          <Heading fontSize={40} fontWeight="normal" my="5">
            Develop your knowledge and learn
            <Text
              display="inline-block"
              fontWeight="bold"
              fontSize={40}
              color="blue.100"
            >
              great teachers.
            </Text>
          </Heading>
          <Text color="white" fontSize={16}>
            Create or login your account and start watching now.
          </Text>
        </Flex>

        <Flex w="100%" align="center" justify="end">
          <Box bg="gray.500" p="8">
            <Text fontSize="large" fontWeight="500" mb="5">
              Logue na plataforma
            </Text>
            <Stack spacing="2">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<HiUser color="gray.100" />}
                />
                <Input
                  variant="flushed"
                  placeholder="E-mail or Login"
                  _placeholder={{
                    color: "gray.100",
                  }}
                  _focusVisible={{
                    borderColor: "white",
                    boxShadow: "0px 1px 0px 0px white",
                  }}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<HiLockClosed color="gray.100" />}
                />
                <Input
                  variant="flushed"
                  placeholder="Password"
                  _placeholder={{
                    color: "gray.100",
                  }}
                  _focusVisible={{
                    borderColor: "white",
                    boxShadow: "0px 1px 0px 0px white",
                  }}
                />
              </InputGroup>
            </Stack>
            <Button
              bg="green.400"
              borderRadius="4"
              w="100%"
              _hover={{
                bg: "green.500",
              }}
              mt="6"
            >
              Login
            </Button>

            <Text mt="2">
              You don't have account?{" "}
              <Link href="/signup" color="blue.100">
                Signup
              </Link>
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex w="100%" align="center" justify="center">
        <BannerHome />
      </Flex>
    </>
  );
};

export default Home;
