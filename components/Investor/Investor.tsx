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
      <Box bg="brand.400">
        <Flex
          maxW="1000px"
          mx="auto"
          height="400px"
          align="center"
          // pos="relative"
          // bottom="350px"
          p={10}

          // direction="row-reverse"
        >
          <Flex
            flex="1"
            color="black"
            justify="space-between"
            align="flex-end"
            h="200px"
          >
            <VStack align="start" spacing={3} mt="4" justify="end">
              <Heading fontSize="4xl"> Happy Investors</Heading>
              <Text fontSize="sm" maxW={64}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              </Text>
            </VStack>
          </Flex>
          <Stack flex="1" justify="center" height="20px" align="center">
            <Flex justify="center" pos="relative" left="50px">
              <Box pos="relative" left="-50px" top="150px" mb="150px">
                <Box width="20px" height="20px" bg="green.400" />
              </Box>
              <Box pos="relative" left="-40px" top="50px">
                <Image src="images/invest1.png" alt="invest1" h="150px" />
              </Box>
              <Box pos="relative" left="-20px" top="20px" mb="20px">
                <Image src="/images/invest2.png" alt="invest2" h="150px" />
              </Box>
              <Box pos="relative" left="-10px" top="80px" mb="80px">
                <Box
                  width="50px"
                  height="50px"
                  bg="gray.700"
                  borderRadius="md"
                />
              </Box>
            </Flex>
            <Flex pos="relative" left="50px">
              <Box pos="relative" left="-60px" top="40px" mb="40px">
                <Box
                  width="50px"
                  height="50px"
                  bg="gray.700"
                  borderRadius="md"
                />
              </Box>
              <Box pos="relative" top="40px" left="-50px" mb="40px">
                <Image src="/images/invest3.png" alt="invest3" h="150px" />
              </Box>
              <Box pos="relative" top="10px" mb="10px" left="-30px">
                <Image src="/images/invest4.png" alt="invest4" h="150px" />
              </Box>
              <Box
                pos="relative"
                left="-180px"
                top="180px"
                mb="180px"
                bg="red"
                // mr="180px"
              >
                <Box width="30px" height="30px" bg="red" borderRadius="xl" />
              </Box>
            </Flex>
          </Stack>
        </Flex>
        {/* </Box> */}
        <Flex px="4" py="4" maxW="1300px" justify="space-evenly" bg="white">
          <Image src="/icons/airbnb.png" alt="airbnb" />
          <Image src="/icons/fedex.png" alt="fedex" />
          <Image src="/icons/google.png" alt="google" />
          <Image src="/icons/hubspot.png" alt="hubspot" />
          <Image src="/icons/microsoft.png" alt="microsoft" />
          <Image src="/icons/walmart.png" alt="walmart" />
        </Flex>
      </Box>
    </>
  );
};

export default Investor;
