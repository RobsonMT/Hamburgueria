import { Badge, Box, IconButton } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { theme } from "../../styles/theme";

interface IcartProps {
  amount: number;
  onClick(): void;
}

export const CartIcon = ({ amount, onClick }: IcartProps) => (
  <Box flexDirection="column" position="relative" onClick={onClick}>
    {amount > 0 ? (
      <>
        <IconButton
          bg="transparent"
          icon={<FaShoppingCart size={25} />}
          transition="scale .2s linear "
          aria-label="supprimer"
          color={theme.colors.gray[300]}
          pr="1"
        />
        <Badge
          boxSize="7"
          background="green.300"
          color="white"
          borderRadius="10px"
          display="inline-flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          inset="-7px 20px 0px 12px"
          fontSize="18px"
          w="25px"
          _hover={{ cursor: "pointer" }}
        >
          {amount}
        </Badge>
      </>
    ) : (
      <IconButton
        bg="transparent"
        icon={<FaShoppingCart size={25} />}
        transition="scale .2s linear "
        _hover={{
          cursor: "pointer",
          transform: "scale(1.1)",
        }}
        aria-label="supprimer"
        color={theme.colors.gray[300]}
        pr="1"
      />
    )}
  </Box>
);
