import { FormControl, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { theme } from "../../styles/theme";

import { Input } from "./input";

interface ISearchBoxProps {
  closeSearchBox(): void;
}

export const SearchBox = ({ closeSearchBox }: ISearchBoxProps) => {
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
          bg="green.500"
          borderRadius="5px"
          transition="filter .1s linear "
          _hover={{
            filter: "brightness(1.2)",
            cursor: "pointer",
          }}
          _active={{ filter: "brightness(.8)" }}
          aria-label="supprimer"
          onClick={closeSearchBox}
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
          color="gray.300"
          _hover={{ filter: "brightness(1.1)" }}
          _focus={{ bg: "gray.0" }}
        />
      </InputGroup>
    </FormControl>
  );
};
