import { Flex, Grid, Text, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { CityGroup } from "../components/CityGroup";
import { ContinentBanner } from "../components/ContinentBanner";
import { Infos } from "../components/Infos";

export default function europa() {
  return (
    <>
      <Head>
        <title>WorldTrip - Europa</title>
      </Head>
      <ContinentBanner bannerImage="Europa" title="Europa" />
      <Flex direction="column" maxWidth="1240px" mx="auto" mt={["10", "20"]}>
        <Grid templateColumns={["1fr", "repeat(5, 1fr)"]}>
          <GridItem mx="auto" width={["90%", "100%"]} colSpan={3}>
            <Text
              mb="4"
              fontSize={["14", "24"]}
              color="gray.600"
              textAlign="justify"
            >
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </GridItem>
          <GridItem colSpan={2} mx="auto">
            <Infos />
          </GridItem>
        </Grid>
        <CityGroup />
      </Flex>
    </>
  );
}
