import { useBreakpointValue, Flex, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardProps {
  image: string;
  children: ReactNode;
}

export function Card({ children, image }: CardProps) {
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isWide ? (
        <Image src={`/options/${image}.svg`} w="85px" h="85px" mb="6" />
      ) : (
        <Image src={`/options/dot.svg`} mr="2" />
      )}
      <Text fontWeight="semibold" fontSize={["18", "24"]}>
        {children}
      </Text>
    </Flex>
  );
}
