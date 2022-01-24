import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CardProduct } from "../../components/CardProduct";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { IProductInStock } from "../../types/Product";

export const Dashboard = () => {
  const [products, setProducts] = useState<IProductInStock[]>([]);

  const loadProducts = async () => {
    const response = await api.get("/products");
    setProducts(response.data);
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
        {products.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </Flex>
    </Flex>
  );
};
