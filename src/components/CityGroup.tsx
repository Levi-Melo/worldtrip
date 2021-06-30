import React from "react";
import { CityCard } from "./CityCard";
import {  Flex, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
export function CityGroup() {
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex mt={["10", "20"]} direction="column">
      <Text fontSize={["24", "36"]} ml={isWide ? "" : "7"}>
        Cidades +100
      </Text>
      <Grid
        mt="4"
        templateColumns={["1fr", "repeat(4, 1fr)"]}
        mx={["auto", "0"]}
        rowGap="10"
      >
        <CityCard
          image="/cardImages/LondresBanner.svg"
          countryEllipse="/cardImages/UKEllipse.svg"
          city="Londres"
          country="Reino Unido"
        />
        <CityCard
          image="/cardImages/ParisBanner.svg"
          countryEllipse="/cardImages/FrenchEllipse.svg"
          city="Paris"
          country="França"
        />
        <CityCard
          image="/cardImages/RomaBanner.svg"
          countryEllipse="/cardImages/ItalyEllipse.svg"
          city="Roma"
          country="Itália"
        />
        <CityCard
          image="/cardImages/PragaBanner.svg"
          countryEllipse="/cardImages/CzechRepublicEllipse.svg"
          city="Praga"
          country="Republica Tcheca"
        />
        <CityCard
          image="/cardImages/AmsterdamBanner.svg"
          countryEllipse="/cardImages/NetherlandsEllipse.svg"
          city="Amsterdã"
          country="Holanda"
        />
      </Grid>
    </Flex>
  );
}
