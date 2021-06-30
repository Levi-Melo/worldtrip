import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import React from "react";

interface ICityCardProps {
  image: string;
  countryEllipse: string;
  city: string;
  country: string;
}

export function CityCard({
  image,
  countryEllipse,
  city,
  country,
}: ICityCardProps) {
  return (
    <Box
      height="279px"
      width="256px"
      border="1px solid"
      borderColor="yellow.300"
      borderRadius="6"
      bg="white"
    >
      <Image src={image} width="max" />
      <Grid mt="4" height="max" width="max" templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={4}>
          <Text ml="6" fontSize="20" fontWeight="semibold">
            {city}
          </Text>
          <Text ml="6" mt="4" fontSize="16">
            {country}
          </Text>
        </GridItem>
        <GridItem my="auto">
          <Image mr="5" src={countryEllipse} />
        </GridItem>
      </Grid>
    </Box>
  );
}
