import { Box, Center, Flex, Grid, HStack } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";

export const SigninInfo = () => (
  <Grid w={["100%", "100%", "50%", "50%"]} gap="10px">
    <HStack align="baseline" margin="30px 0 20px 0">
      <Heading as="h1" fontSize="30px" fontWeight="700">
        Burguer
      </Heading>
      <Text color="red" fontSize="20px" fontWeight="bold">
        Kenzie
      </Text>
    </HStack>
    <Flex
      alignItems="center"
      border="2px solid #E0E0E0"
      borderRadius="5px"
      w="100%"
      padding="10px"
    >
      <Center
        bg="green.100"
        minW="60px"
        minH="60px"
        borderRadius="5px"
        mr="10px"
      >
        <FiShoppingBag size="30" color="#168821" />
      </Center>
      <Text fontSize="14px" color="gray.300">
        A vida é como um sanduíche, é preciso recheá-la com os <b>melhores </b>
        ingredientes.
      </Text>
    </Flex>
  </Grid>
);
