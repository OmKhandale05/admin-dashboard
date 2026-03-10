import { useState } from "react";
import { orders as initialOrders } from "../data/orders";

const useOrders = () => {

    const [orderList, setOrderList] = useState(initialOrders);
    return {
        orderList
    };
};
 
export default useOrders;