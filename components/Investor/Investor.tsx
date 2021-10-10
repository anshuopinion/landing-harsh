import React from "react";
import { Container } from "@chakra-ui/layout";

import {
  Flex,
  GridItem,
  Grid,
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
      <Image
        src={"/icons/yellowLine.svg"}
        alt="yellow Line "
        pos="relative"
        top="550px"
        left="40%"
        height="700px"
        mt="-550px"
      />
      <Image
        src={"/icons/redLine.svg"}
        alt="redLine  "
        pos="relative"
        bottom="200px"
        zIndex="0"
        mb="-200px"
      />

      <Flex
        maxW="1000px"
        justify="center"
        mx="auto"
        height="400px"
        align="center"
        pos="relative"
        bottom="200px"
      >
        <Flex
          flex="1"
          color="white"
          justify="center"
          align="flex-end"
          h="200px"
        >
          <VStack align="start" spacing={3} mt="4" justify="end">
            <Heading fontSize="xl"> Happy Investors</Heading>
            <Text fontSize="sm" maxW={64}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            </Text>
          </VStack>
        </Flex>
        <Stack flex="1" justify="center" height="240px" align="center">
          <Flex>
            <Box pos="relative" left="-50px" top="150px">
              <Box width="20px" height="20px" bg="green.400" />
            </Box>
            <Box pos="relative" left="-40px" top="30px">
              <Image src="images/invest1.png" alt="invest1" h="150px" />
            </Box>
            <Box pos="relative" left="-20px">
              <Image src="/images/invest2.png" alt="invest2" h="150px" />
            </Box>
            <Box pos="relative" left="-10px" top="80px">
              <Box width="50px" height="50px" bg="gray.700" borderRadius="md" />
            </Box>
          </Flex>
          <Flex>
            <Box pos="relative" left="-60px" top="40px">
              <Box width="50px" height="50px" bg="gray.700" borderRadius="md" />
            </Box>
            <Box pos="relative" top="40px" left="-50px">
              <Image src="/images/invest3.png" alt="invest3" h="150px" />
            </Box>
            <Box pos="relative" top="10px" left="-30px">
              <Image src="/images/invest4.png" alt="invest4" h="150px" />
            </Box>
            <Box pos="relative" left="-180px" top="180px">
              <Box width="30px" height="30px" bg="red" borderRadius="xl" />
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default Investor;
