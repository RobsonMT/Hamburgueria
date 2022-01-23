import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { CartIcon } from "../Cart/CartIcon";

import { SearchBox } from "../Form/SearchBox";
import { Logo } from "../Logo";

export const Header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const openSearchBox = () => setShowSearchBox(true);

  const closeSearchBox = () => setShowSearchBox(false);

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

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

            <CartIcon amount={0} />

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
