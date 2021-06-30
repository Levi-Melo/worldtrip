import { Box, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Banner from "../components/Banner";
import { Options } from "../components/Options";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center">
      <Head>
        <title>WorldTrip - Home</title>
      </Head>
      <Banner />
      <Options />
      <Box
        w={["60px", "90px"]}
        mx="auto"
        h="2px"
        bg="gray.700"
        my={["9", "20"]}
      />
      <Text
        fontSize={["20", "36"]}
        mb={["5", "14"]}
        align="center"
        justify="center"
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Text>
      <Slider />
    </Flex>
  );
}
