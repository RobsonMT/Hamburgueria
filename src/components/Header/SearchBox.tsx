import React from "react";
import { FormControl, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { Input } from "../Form/input";

interface ISearchBoxProps {
  closeSearchBox(): void;
  filterProducts(inputValue: string): void;
}

export const SearchBox = ({
  closeSearchBox,
  filterProducts,
}: ISearchBoxProps) => {
  const [searchedValue, setSearchedValue] = useState<string>("");

  const searchProducts = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterProducts(event.target.value);
    setSearchedValue(event.target.value);
  };

  const CloseSearchBox = () => {
    closeSearchBox();
    setSearchedValue("");
  };

  return (
    <FormControl padding="5px">
      <InputGroup
        w={["100%", "100%", "30vw", "30vw"]}
        border="1px solid #BDBDBD"
        borderRadius="5px"
      >
        <InputRightElement
          mt="1"
          mr="1.5"
          bg="green.300"
          borderRadius="5px"
          transition="filter .1s linear "
          _hover={{
            filter: "brightness(1.1)",
            cursor: "pointer",
          }}
          _active={{ filter: "brightness(.8)" }}
          aria-label="supprimer"
          onClick={CloseSearchBox}
        >
          <FaSearch color={theme.colors.gray[0]} width="100%" />
        </InputRightElement>
        <Input
          type="search"
          name="title"
          placeholder="Digitar Pesquisa"
          value={searchedValue || ""}
          onChange={searchProducts}
          border="none"
          variant="filled"
          bg="gray.0"
          paddingRight="55px"
          color="gray.300"
          _hover={{ filter: "brightness(1.1)" }}
          _focus={{ bg: "gray.0" }}
        />
      </InputGroup>
    </FormControl>
  );
};
