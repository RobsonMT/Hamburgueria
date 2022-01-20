import { FormControl, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { theme } from "../../styles/theme";

import { Input } from "./input";

export const SearchBox = () => {
  return (
    <FormControl padding="5px">
      <InputGroup w="20vw">
        <InputRightElement
          mt="1"
          mr="1.5"
          bg="green.500"
          borderRadius="5px"
          _hover={{
            filter: "brightness(1.2)",
            transition: "filter, scale .1s linear ",
            cursor: "pointer",
            transform: "scale(1.05)",
          }}
          _active={{
            filter: "brightness(.8)",
          }}
          aria-label="supprimer"
        >
          <FaSearch color={theme.colors.gray[0]} width="100%" />
        </InputRightElement>
        <Input
          type="search"
          name="title"
          placeholder="Digitar Pesquisa"
          border="none"
          variant="filled"
          bg="gray.0"
          paddingRight="55px"
        />
      </InputGroup>
    </FormControl>
  );
};
