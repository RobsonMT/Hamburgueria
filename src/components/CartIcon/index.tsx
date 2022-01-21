import { Badge, Box, IconButton } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { theme } from "../../styles/theme";

interface IcartProps {
  amount: number;
}

export const CartIcon = ({ amount }: IcartProps) => (
  <Box flexDirection="column" position="relative">
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
    {amount > 0 && (
      <Badge
        boxSize="7"
        background="blue"
        color="white"
        borderRadius="50%"
        padding="12px"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        inset="-7px 20px 0px 12px"
      >
        {amount}
      </Badge>
    )}
  </Box>
);
