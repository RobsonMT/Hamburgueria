import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { CartModal } from "../Cart/CartModal";
import { SearchBox } from "../Form/SearchBox";
import { useCart } from "../../contexts/Cart";
import { useEffect, useState } from "react";
import { Logo } from "../Logo";

export const Header = () => {
  const { cart, loadCart } = useCart();

  const [showSearchBox, setShowSearchBox] = useState(false);

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
      height={["60px", "75px"]}
      paddingX={["10px", "40px"]}
    >
      {showSearchBox ? (
        <SearchBox closeSearchBox={closeSearchBox} />
      ) : (
        <>
          <Logo />

          <Flex alignItems="center" gap={["10px", "40px"]}>
            {isWideVersion ? (
              <SearchBox closeSearchBox={closeSearchBox} />
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
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};
