import React from "react";
import { Container } from "@chakra-ui/layout";

import {
  Flex,
  Image,
  Box,
  Stack,
  VStack,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";

const Investor = () => {
  return (
    <>
      {/* <Box pos="relative" top="-50px"> */}
      {/* <Image
          overflow="hidden"
          src={"/icons/yellowLine.svg"}
          alt="yellow Line "
          pos="relative"
          top="550px"
          left="40%"
          height="700px"
          width="650px"
          mt="-550px"
        /> */}
      {/* <Image
          overflow="hidden"
          src={"/icons/redLine.svg"}
          alt="redLine  "
          pos="relative"
          bottom="300px"
          height="700px"
          width="600px"
          zIndex="0"
          mb="-200px"
        /> */}
      <Box bg="brand.400" id="investor" p={10}>
        <Flex
          maxW="1000px"
          mx="auto"
          height={{ base: "500px", md: "400px" }}
          align="center"
          direction={{ base: "column", md: "row" }}
        >
          <Flex flex="1" color="black">
            <VStack align="start" spacing={3} mt="4" justify="start">
              <Heading fontSize="4xl"> Happy Investors</Heading>
              <Text fontSize="sm" maxW={64}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              </Text>
            </VStack>
          </Flex>
          <Stack
            flex="1"
            justify="center"
            height="400px"
            align="center"
            width="90%"
          >
            <Flex pos="relative" left={{ base: "30px", md: "60px" }}>
              <Box
                pos="relative"
                left={{ base: "-30px", md: "-60px" }}
                ml={{ base: "-30px", md: "-60px" }}
                top={{ base: "60px", md: "150px" }}
                mb={{ base: "60px", md: "150px" }}
                width={{ base: "5vw" }}
                height={{ base: "5vw" }}
                maxH="25px"
                maxW="25px"
                bg="green.400"
              />

              <Box
                pos="relative"
                left={{ base: "-10px", md: "-20px" }}
                ml={{ base: "-10px", md: "-20px" }}
                top={{ base: "0", md: "50px" }}
              >
                <Image src="images/invest1.png" alt="invest1" maxH="150px" />
              </Box>
              <Box
                pos="relative"
                left={{ base: "0", md: "0" }}
                ml={{ base: "0", md: "0" }}
                top={{ base: "-20px", md: "20px" }}
                mb={{ base: "-20px", md: "20px" }}
              >
                <Image src="/images/invest2.png" alt="invest2" maxH="150px" />
              </Box>

              <Box
                pos="relative"
                left={{ base: "5px" }}
                ml={{ base: "5px" }}
                top={{ base: "40px", md: "80px" }}
                mb={{ base: "40px", md: "80px" }}
                width={{ base: "10vw" }}
                height={{ base: "10vw" }}
                maxH="50px"
                maxW="50px"
                bg="gray.700"
                borderRadius="md"
              />
            </Flex>
            <Flex
              pos="relative"
              left={{ base: "10px", md: "-50px" }}
              ml={{ base: "10px", md: "-50px" }}
            >
              <Box
                pos="relative"
                left={{ base: "-10px", md: "20px" }}
                ml={{ base: "-10px", md: "20px" }}
                top={{ base: "40px" }}
                mb={{ base: "40px" }}
                width={{ base: "10vw" }}
                height={{ base: "10vw" }}
                maxH="50px"
                maxW="50px"
                bg="gray.700"
                borderRadius="md"
              />

              <Box
                pos="relative"
                left={{ base: "0", md: "20px" }}
                ml={{ base: "0", md: "20px" }}
                top={{ base: "0", md: "40px" }}
                mb={{ base: "0", md: "40px" }}
              >
                <Image src="/images/invest3.png" alt="invest3" maxH="150px" />
              </Box>
              <Box
                pos="relative"
                left={{ base: "10px", md: "20px" }}
                ml={{ base: "0", md: "20px" }}
                top={{ base: "-15px", md: "10px" }}
                mb={{ base: "0", md: "10px" }}
              >
                <Image src="/images/invest4.png" alt="invest4" maxH="150px" />
              </Box>

              <Box
                pos="relative"
                left={{ base: "15px", md: "-70px" }}
                ml={{ base: "", md: "-70px" }}
                top={{ base: "50px", md: "180px" }}
                mb={{ base: "", md: "180px" }}
                width={{ base: "5vw" }}
                height={{ base: "5vw" }}
                maxH="25px"
                maxW="25px"
                borderRadius="md"
                bg="red"
              />
            </Flex>
          </Stack>
        </Flex>
        {/* </Box> */}
      </Box>
      {/* <Flex
        px="4"
        py="4"
        maxW="1300px"
        justify="space-evenly"
        bg="white"
        overflow={{ base: "scroll", md: "hidden" }}
      >
        <Image mx="4" src="/icons/airbnb.png" alt="airbnb" />
        <Image mx="4" src="/icons/fedex.png" alt="fedex" />
        <Image mx="4" src="/icons/google.png" alt="google" />
        <Image mx="4" src="/icons/hubspot.png" alt="hubspot" />
        <Image mx="4" src="/icons/microsoft.png" alt="microsoft" />
        <Image mx="4" src="/icons/walmart.png" alt="walmart" />
      </Flex> */}
    </>
  );
};

export default Investor;
