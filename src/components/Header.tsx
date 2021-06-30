import { Flex, Icon, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";

export function Header() {
  const { asPath } = useRouter();
  const isNotHome = asPath !== "/";

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      mx="auto"
      h={["50px", "100px"]}
      justify="center"
    >
      {isNotHome && (
        <Link href="/" my="auto" mr="auto" ml="2">
          <Icon as={BsChevronLeft} fontSize={[20, 40]} />
        </Link>
      )}
      <Image
        w={["81px", "184px"]}
        src="/Logo.svg"
        alt="wordtrip"
        mr={isNotHome ? "auto" : ""}
      />
    </Flex>
  );
}
