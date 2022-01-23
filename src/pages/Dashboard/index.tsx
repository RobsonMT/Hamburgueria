import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { CartModal } from "../../components/Cart/CartModal";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

interface IProduct {
  name: string;
  category: string;
  price: number;
  image: string;
}

export const Dashboard = () => {
  const [store, setStore] = useState<IProduct[]>([]);

  const loadProducts = async () => {
    const response = await api.get("/products");
    setStore(response.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Flex flexDirection="column">
      <Header />
      <Flex
        flexFlow="row wrap"
        w="100%"
        justifyContent="center"
        alignItems="center"
        gap={["10px", "20px"]}
        paddingX={["10px", "40px"]}
        marginY="10"
      >
        {store.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </Flex>
      <CartModal />
    </Flex>
  );
};
