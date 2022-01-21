import { Flex } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

export const Dashboard = () => (
  <Flex flexDirection="column">
    <Header />
    <Flex
      flexFlow="row wrap"
      w="100%"
      justifyContent="center"
      alignItems="center"
      gap={["10px", "20px"]}
      paddingX={["10px", "40px"]}
      marginY="10"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((task) => (
        <Card key={task} />
      ))}
    </Flex>
  </Flex>
);
