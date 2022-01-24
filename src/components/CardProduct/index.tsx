import { GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Button, Flex } from "@chakra-ui/react";
import { useCart } from "../../contexts/Cart";
import { IProductInStock } from "../../types/Product";
import { formatPrice } from "../../utils/Format";

interface ICardProductProps {
  product: IProductInStock;
}

export const CardProduct = ({ product }: ICardProductProps) => {
  const $productPrice = formatPrice(product.price);

  const { addToCart } = useCart();

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
        <Image src={product.image} objectFit="contain" width="100%" />
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
            onClick={() => addToCart(product)}
          >
            Adicionar
          </Button>
        </VStack>
      </Flex>
    </GridItem>
  );
};
