import React from "react";
import { Box, Drawer, DrawerContent, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../../contexts/Auth";
import { DrawerBody, Flex, Center } from "@chakra-ui/react";
import { DrawerOverlay, DrawerHeader } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { theme } from "../../styles/theme";
import { shade } from "polished";

interface IMenuProps {
  isOpen: boolean;
  onClose(): void;
}

export const MenuLogout = ({ isOpen, onClose }: IMenuProps) => {
  const { user, signOut } = useAuth();

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt={["60px", "75px"]} />
      <DrawerContent ml="auto" mt={["65px", "80px"]} w={["90vw", "350px"]}>
        <DrawerHeader
          borderBottomWidth="1px"
          borderColor="gray.200"
          background={shade(0.3, "green")}
          color="gray.50"
        >
          {user.name}
          <Text color="gray.400" fontSize="sm">
            {user.email}
          </Text>
        </DrawerHeader>
        <DrawerBody background={theme.colors.gray[0]}>
          <Flex align="center" onClick={signOut} _hover={{ cursor: "pointer" }}>
            <Center
              w="50px"
              h="50px"
              bg="red.600"
              fontSize="2xl"
              borderRadius="md"
            >
              <FiLogOut color="gray.300" />
            </Center>
            <Box ml="4">
              <Heading as="h2" fontSize="lg" textAlign="center">
                Sair da minha conta
              </Heading>
              <Text color="gray.300" fontSize="small" textAlign="center">
                sair da minha conta agora
              </Text>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
