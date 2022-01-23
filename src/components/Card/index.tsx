import { GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Button, Flex } from "@chakra-ui/react";
import { formatPrice } from "../../utils/Format";

interface IProduct {
  name: string;
  category: string;
  price: number;
  image: string;
}

interface ICardProps {
  product: IProduct;
}

export const Card = ({ product }: ICardProps) => {
  const $productPrice = formatPrice(product.price);

  return (
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
      <Flex height="50%" background="white">
        <Image
          // webkit-box-reflect="below 0 linear-gradient (transparent, rgba(0,0,0,0.8))"
          src={product.image}
          objectFit="contain"
          width="100%"
        />
      </Flex>
      <Flex flex="1" padding="15px 10px">
        <VStack alignItems="start" justifyContent="space-around">
          <Heading as="h3" fontSize="20px" color="gray.600">
            {product.name}
          </Heading>
          <Text color="gray.400">{product.category}</Text>
          <Text color="green.300">
            <b>{$productPrice}</b>
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
};
