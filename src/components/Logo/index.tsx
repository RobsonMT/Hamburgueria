import { Flex, Heading, Text } from "@chakra-ui/react";

interface ILogoProps {
  margin?: string;
}

export const Logo = ({ margin }: ILogoProps) => (
  <Flex align="baseline" margin={margin}>
    <Heading as="h1" fontWeight="700">
      Burguer
    </Heading>
    <Text color="red" fontSize="20px" fontWeight="bold">
      Kenzie
    </Text>
  </Flex>
);
