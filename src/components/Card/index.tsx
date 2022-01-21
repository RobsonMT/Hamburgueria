import { GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Button, Flex } from "@chakra-ui/react";

export const Card = () => (
  <GridItem
    display="flex"
    flexDirection="column"
    border="2px solid"
    borderColor="gray.100"
    borderRadius="5px"
    height="350px"
    width="300px"
    background="gray.0"
    transition=".1s ease"
    _hover={{
      borderColor: "green.300",
      transform: "scale(1.008)",
      button: { background: "green.300" },
    }}
  >
    <Flex height="50%">
      <Image
        webkit-box-reflect="below 0 linear-gradient (transparent, rgba(0,0,0,0.8))"
        src={"https://i.ibb.co/ZmLQbf4/x-picanha-duplo.png"}
        transform="scale(.8)"
        objectFit="cover"
        width="100%"
      />
    </Flex>
    <Flex flex="1" background="white" padding="15px 10px">
      <VStack alignItems="start" justifyContent="space-around">
        <Heading as="h3" fontSize="20px" color="gray.600">
          Hamburguer
        </Heading>
        <Text color="gray.400">Sanduiches</Text>
        <Text color="green.300">
          <b>R$ 18,00</b>
        </Text>
        <Button
          bg="gray.200"
          color="gray.0"
          height="35px"
          _hover={{ filter: "brightness(1.1)" }}
        >
          Adicionar
        </Button>
      </VStack>
    </Flex>
  </GridItem>
);
