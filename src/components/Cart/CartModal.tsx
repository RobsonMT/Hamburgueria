import { Text, Flex, Heading, Image, useDisclosure } from "@chakra-ui/react";
import { IconButton, Button } from "@chakra-ui/react";
import { HStack, VStack, Modal } from "@chakra-ui/react";
import { ModalContent, ModalFooter, ModalHeader } from "@chakra-ui/react";
import { ModalBody, ModalCloseButton, ModalOverlay } from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { IoMdTrash } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";

export const CartModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={["90vw", "500px"]}>
          <ModalHeader background={theme.colors.green[300]} color="white">
            <Heading as="h3" fontWeight="bold" fontSize="20px">
              Carrinho de compras
            </Heading>
            <ModalCloseButton mt="1" />
          </ModalHeader>

          {/* <ModalBody textAlign="center" padding="60px">
            <Heading as="h3" fontWeight="bold" fontSize="20px">
              Sua sacola está vazia
            </Heading>
            <Text color={theme.colors.gray[400]} mb="1rem" mt="1rem">
              Adicione itens
            </Text>
          </ModalBody> */}

          <ModalBody>
            <Flex gap="10px">
              <Flex
                height="unset"
                width={["120px", "150px"]}
                background="gray.100"
                borderRadius="5px"
              >
                <Image
                  // webkit-box-reflect="below 0 linear-gradient (transparent, rgba(0,0,0,0.8))"
                  src="https://i.ibb.co/Tbd2CyQ/Hamburger.png"
                  objectFit="contain"
                  width="100%"
                />
              </Flex>
              <VStack
                w="100%"
                display="flex"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <HStack
                  display="inline-flex"
                  w="100%"
                  justifyContent="space-between"
                >
                  <Text fontWeight="bold">Hamburguer</Text>
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
                  />
                  <Text paddingX="15px">7</Text>
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
                  />
                </HStack>
              </VStack>
            </Flex>
          </ModalBody>

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
              <Text>R$ 50,00</Text>
            </HStack>
            <Flex justifyContent="space-between" width="100%" gap="20px">
              <Button width="50%">Remover todos</Button>
              <Button width="50%">Finalizar compra</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
