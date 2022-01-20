import { Heading, HStack, Text } from "@chakra-ui/react";

interface ILogoProps {
  margin?: string;
}

export const Logo = ({ margin }: ILogoProps) => (
  <HStack align="baseline" margin={margin}>
    <Heading as="h1" fontSize="30px" fontWeight="700">
      Burguer
    </Heading>
    <Text color="red" fontSize="20px" fontWeight="bold">
      Kenzie
    </Text>
  </HStack>
);
