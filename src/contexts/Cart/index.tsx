import React from "react";
import { IProduct, IProductInStock } from "../../types";
import { createContext, ReactNode, useEffect } from "react";
import { useContext, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../Auth";
import { toast } from "react-toastify";

interface IChildren {
  children: ReactNode;
}

interface ICartContextData {
  cart: IProduct[];
  loadCart(): Promise<void>;
  addToCart(product: IProductInStock): Promise<void>;
  increaseAmount(product: IProduct): Promise<void>;
  decreaseAmount(product: IProduct): Promise<void>;
  deleteFromCart(product: IProduct): Promise<void>;
  clearCart(): void;
}

const CartContext = createContext<ICartContextData>({} as ICartContextData);

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an CartProvider");
  }

  return context;
};

const CartProvider = ({ children }: IChildren) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const { user, tokenBearer } = useAuth();

  const loadCart = async () => {
    const response = await api.get(`/users/${user.id}/cart`, tokenBearer);
    setCart(response.data);
  };

  const addToCart = async (product: IProductInStock) => {
    const includesProduct = cart.some((e) => e.name === product.name);
    const productInCart = cart.filter((e) => e.name === product.name);

    if (!includesProduct) {
      const newProduct = { ...product, quantity: 1, userId: user.id };

      await api.post("cart", newProduct, tokenBearer);
    } else {
      increaseAmount(productInCart[0]);
    }

    toast.success("Produto adicionado");
    loadCart();
  };

  const increaseAmount = async (product: IProduct) => {
    const increase = product.quantity + 1;

    await api.patch(
      `/cart/${product.id}`,
      {
        quantity: increase,
      },
      tokenBearer
    );

    loadCart();
  };

  const decreaseAmount = async (product: IProduct) => {
    if (product.quantity > 1) {
      const decrease = product.quantity - 1;

      await api.patch(
        `/cart/${product.id}`,
        {
          quantity: decrease,
        },
        tokenBearer
      );

      loadCart();
    } else {
      deleteFromCart(product);
    }
  };

  const deleteFromCart = async (product: IProduct) => {
    await api.delete(`/cart/${product.id}`, tokenBearer).then(() => {
      toast.info("Produto removido");
    });
    loadCart();
  };

  const clearCart = () => {
    cart.forEach((product) => {
      deleteFromCart(product);
    });

    toast.warning("Seu carrinho está vazio!");
  };

  useEffect(() => {}, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        loadCart,
        addToCart,
        increaseAmount,
        decreaseAmount,
        deleteFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
