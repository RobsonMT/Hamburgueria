import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IProductInStock } from "../../types/Product";
import { CardProduct } from "../../components/CardProduct";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

export const Dashboard = () => {
  const [products, setProducts] = useState<IProductInStock[]>([]);

  const [filteredProducts, setFilteredProducts] = useState<IProductInStock[]>(
    []
  );

  const filterProducts = (inputValue: string) => {
    setFilteredProducts(
      [...products].filter((item) => {
        return item.name
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase());
      })
    );
  };

  const loadProducts = async () => {
    const response = await api.get("/products");
    setProducts(response.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {}, []);

  return (
    <Flex flexDirection="column">
      <Header filterProducts={filterProducts} />
      <Flex
        flexFlow="row wrap"
        w="100%"
        justifyContent="center"
        alignItems="center"
        gap={["10px", "20px"]}
        paddingX={["10px", "40px"]}
        marginY="10"
      >
        {filteredProducts.length > 0 ? (
          <>
            {filteredProducts.map((product, index) => (
              <CardProduct key={index} product={product} />
            ))}
          </>
        ) : (
          <>
            {products.map((product, index) => (
              <CardProduct key={index} product={product} />
            ))}
          </>
        )}
      </Flex>
    </Flex>
  );
};
