import { Flex, IconButton, Image, ModalBody, Text } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { theme } from "../../styles/theme";
import { IProduct } from "../../types/Product";
import { useCart } from "../../contexts/Cart";

interface ICardProductCartProps {
  product: IProduct;
}

export const CardProductCart = ({ product }: ICardProductCartProps) => {
  const { deleteFromCart, increaseAmount, decreaseAmount } = useCart();

  return (
    <ModalBody>
      <Flex gap="10px">
        <Flex
          height="unset"
          width={["120px", "150px"]}
          background="gray.100"
          borderRadius="5px"
        >
          <Image src={product.image} objectFit="contain" width="100%" />
        </Flex>
        <VStack
          w="100%"
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <HStack display="inline-flex" w="100%" justifyContent="space-between">
            <Text fontWeight="bold">{product.name}</Text>
            <IconButton
              bg="transparent"
              icon={<IoMdTrash size="30px" />}
              transition="scale .2s linear "
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
              }}
              aria-label="supprimer"
              color={theme.colors.gray[100]}
              onClick={() => deleteFromCart(product.id)}
            />
          </HStack>

          <HStack border={`3px solid ${theme.colors.gray[100]}`}>
            <IconButton
              bg={theme.colors.gray[100]}
              icon={<RiSubtractFill size="30px" />}
              transition="scale .2s linear "
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
              }}
              aria-label="supprimer"
              borderRadius="none"
              color="red"
              onClick={() => decreaseAmount(product)}
            />
            <Text paddingX="15px">{product.quantity}</Text>
            <IconButton
              bg={theme.colors.gray[100]}
              icon={<MdAdd size="30px" />}
              transition="scale .2s linear "
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
              }}
              aria-label="supprimer"
              borderRadius="none"
              color="green"
              onClick={() => increaseAmount(product)}
            />
          </HStack>
        </VStack>
      </Flex>
    </ModalBody>
  );
};
