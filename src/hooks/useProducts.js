import { useState } from "react";
import { products as initialProducts } from "../data/products";

const useProducts = () => {
  const [productList, setProductList] = useState(initialProducts);

  const deleteProduct = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  const addProduct = (product) => {
    setProductList([
      ...productList,
      { id: productList.length + 1, ...product },
    ]);
  };
  return {
    productList,
    deleteProduct,
    addProduct
  };
};

export default useProducts;
