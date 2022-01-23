import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";

interface IProps {
  children: ReactNode;
}

export const Providers = ({ children }: IProps) => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  </ChakraProvider>
);
