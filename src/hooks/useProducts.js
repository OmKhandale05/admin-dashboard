import { useState } from "react";
import{ products as initialProducts } from "../data/products";

const useProducts = () => {
    const [productList, setProductList] = useState(initialProducts);

    const deleteProduct = (id) =>{
        setProductList(productList.filter(product => product.id !== id));
    };
    return {
        productList,
        deleteProduct
    };
    
};
 
export default useProducts;