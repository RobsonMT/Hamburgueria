import { Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaSearch, FaSignOutAlt, FaStore } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { CartModal } from "../Cart/CartModal";
import { SearchBox } from "./SearchBox";
import { useCart } from "../../contexts/Cart";
import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { MenuLogout } from "./MenuLogout";

interface IHeaderProps {
  filterProducts(inputValue: string): void;
}

export const Header = ({ filterProducts }: IHeaderProps) => {
  const { cart, loadCart } = useCart();

  const [showSearchBox, setShowSearchBox] = useState(false);

  const { isOpen, onClose, onToggle } = useDisclosure();

  const openSearchBox = () => setShowSearchBox(true);

  const closeSearchBox = () => setShowSearchBox(false);

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  useEffect(() => {
    loadCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      background="gray.100"
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      height={["65px", "75px"]}
      paddingX={["10px", "40px"]}
    >
      {showSearchBox ? (
        <SearchBox
          closeSearchBox={closeSearchBox}
          filterProducts={filterProducts}
        />
      ) : (
        <>
          {isWideVersion ? (
            <Logo />
          ) : (
            <Flex align="center" flexDir="column">
              <Heading as="h1" fontWeight="700">
                Burguer
              </Heading>
              <Text color="red" fontSize="20px" fontWeight="bold">
                Kenzie
              </Text>
            </Flex>
          )}

          <Flex alignItems="center" gap={["20px", "40px"]}>
            {isWideVersion ? (
              <SearchBox
                closeSearchBox={closeSearchBox}
                filterProducts={filterProducts}
              />
            ) : (
              <IconButton
                bg="transparent"
                icon={<FaSearch size={25} />}
                transition="scale .2s linear "
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.1)",
                }}
                aria-label="supprimer"
                color={theme.colors.gray[300]}
                onClick={openSearchBox}
              />
            )}

            <IconButton
              bg="transparent"
              icon={<FaStore size={25} />}
              transition="scale .2s linear "
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
              }}
              aria-label="supprimer"
              color={theme.colors.gray[300]}
              onClick={() => filterProducts("")}
            />

            <CartModal cart={cart} />

            <IconButton
              bg="transparent"
              icon={<FaSignOutAlt size={25} />}
              transition="scale .2s linear "
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
              }}
              aria-label="supprimer"
              color={theme.colors.gray[300]}
              onClick={onToggle}
            />
            <MenuLogout isOpen={isOpen} onClose={onClose} />
          </Flex>
        </>
      )}
    </Flex>
  );
};
