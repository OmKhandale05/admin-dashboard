import { useState } from "react";
import { orders} from "../data/orders";

const useOrders = () => {

    const [orderList, setOrderList] = useState(orders);
    return {
        orderList
    };
};
 
export default useOrders;