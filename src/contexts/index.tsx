import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface IProps {
  children: ReactNode;
}

export const Providers = ({ children }: IProps) => (
  <AuthProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </AuthProvider>
);
