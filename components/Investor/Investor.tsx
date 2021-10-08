import React from "react";
import { Flex, GridItem, Grid, Image } from "@chakra-ui/react";

const Investor = () => {
  return (
    <Flex>
      <Flex flex="1"></Flex>
      <Flex flex="1" justify="center" height="240px">
        <Grid placeItems="center" templateColumns="repeat(2,1fr)">
          <GridItem pos="relative" left="-40px" top="30px">
            <Image src="images/invest1.png" alt="invest1" h="150px" />
          </GridItem>
          <GridItem pos="relative" left="-50px">
            <Image src="/images/invest2.png" alt="invest2" h="150px" />
          </GridItem>
          <GridItem pos="relative" top="40px" left="-20px">
            <Image src="/images/invest3.png" alt="invest3" h="150px" />
          </GridItem>
          <GridItem pos="relative" top="10px" left="-30px">
            <Image src="/images/invest4.png" alt="invest4" h="150px" />
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Investor;
