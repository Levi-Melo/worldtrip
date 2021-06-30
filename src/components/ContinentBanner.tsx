import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface IContinentBanner {
  bannerImage: string;
  title: string;
}

export function ContinentBanner({ bannerImage, title }: IContinentBanner) {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage={`${bannerImage}Banner.png`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        fontWeight="semibold"
        color="gray.50"
      >
        {title}
      </Heading>
    </Flex>
  );
}
