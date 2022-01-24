import { ModalContent, ModalFooter, ModalHeader } from "@chakra-ui/react";
import { Text, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { ModalCloseButton, ModalOverlay } from "@chakra-ui/react";
import { HStack, Modal, ModalBody, Button } from "@chakra-ui/react";
import { CardProductCart } from "./CartProductCard";
import { useCart } from "../../contexts/Cart";
import { theme } from "../../styles/theme";
import { IProduct } from "../../types/Product";
import { formatPrice } from "../../utils/Format";
import { CartIcon } from "./CartIcon";

interface ICardModalProps {
  cart: IProduct[];
}

export const CartModal = ({ cart }: ICardModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { clearCart } = useCart();

  const cartAmount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const cartTotal = formatPrice(
    cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
  );

  return (
    <>
      <CartIcon amount={cartAmount} onClick={onOpen} />
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent width={["90vw", "500px"]}>
          <ModalHeader background={theme.colors.green[300]} color="white">
            <Heading as="h3" fontWeight="bold" fontSize="20px">
              Carrinho de compras
            </Heading>
            <ModalCloseButton mt="1" />
          </ModalHeader>

          {cart.length > 0 ? (
            <>
              {cart.map((product) => (
                <CardProductCart key={product.id} product={product} />
              ))}
              <ModalFooter
                alignItems="center"
                justifyContent="center"
                flexFlow="column"
              >
                <hr
                  style={{
                    background: "#E0E0E0",
                    height: "2px",
                    width: "100%",
                    marginTop: "10px",
                    marginBottom: "10px",
                    borderRadius: "2px",
                  }}
                />
                <HStack
                  w="100%"
                  display="inline-flex"
                  justifyContent="space-between"
                  paddingY="20px"
                >
                  <Text fontWeight="bold">Total</Text>
                  <Text>{cartTotal}</Text>
                </HStack>
                <Flex justifyContent="space-between" width="100%" gap="20px">
                  <Button width="50%" onClick={clearCart}>
                    Remover todos
                  </Button>
                  <Button width="50%" onClick={onClose}>
                    Finalizar compra
                  </Button>
                </Flex>
              </ModalFooter>
            </>
          ) : (
            <ModalBody textAlign="center" padding="60px">
              <Heading as="h3" fontWeight="bold" fontSize="20px">
                Sua sacola está vazia
              </Heading>
              <Text color={theme.colors.gray[400]} mb="1rem" mt="1rem">
                Adicione itens
              </Text>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
