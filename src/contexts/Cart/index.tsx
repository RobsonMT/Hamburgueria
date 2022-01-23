import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../../services/api";

interface IPros {
  children: ReactNode;
}

interface IProduct {
  id?: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

interface ICartContextData {
  cart: IProduct[];
}

const CartContext = createContext<ICartContextData>({} as ICartContextData);

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an CartProvider");
  }

  return context;
};

const CartProvider = ({ children }: IPros) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  // const loadCart = useCallback(async () => {
  //   const response = await api.get;
  // }, []);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};

export { CartProvider, useCart };
