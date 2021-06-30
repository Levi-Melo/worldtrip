import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Card } from "./Card";

export function Options() {
  return (
    <Grid
      templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}
      w="100%"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem m={["auto"]}>
        <Card image="cocktail">vida noturna</Card>
      </GridItem>
      <GridItem m={["auto"]}>
        <Card image="surf">praia</Card>
      </GridItem>
      <GridItem m={["auto"]}>
        <Card image="building">moderno</Card>
      </GridItem>
      <GridItem m={["auto"]}>
        <Card image="museum">clássico</Card>
      </GridItem>
      <GridItem colSpan={[2, 1]}>
        <Card image="earth">e mais...</Card>
      </GridItem>
    </Grid>
  );
}
