import { HStack, Flex, Text } from "@chakra-ui/react";
export function Infos() {
  return (
    <HStack spacing="10" g={4}>
      <Flex direction="column" justify="center" align="center">
        <Text fontSize={["24", "48"]} fontWeight="semibold" color="yellow.400">
          50
        </Text>
        <Text fontSize={["18", "24"]} fontWeight="semibold">
          países
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Text fontSize={["24", "48"]} fontWeight="semibold" color="yellow.400">
          60
        </Text>
        <Text fontSize={["18", "24"]} fontWeight="semibold">
          línguas
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Text fontSize={["24", "48"]} fontWeight="semibold" color="yellow.400">
          27
        </Text>
        <Text fontSize={["18", "24"]} fontWeight="semibold">
          cidades +100
        </Text>
      </Flex>
    </HStack>
  );
}
