import useOrders from "../hooks/useOrders";
import Table from "../components/Table";

const Orders = () => {
    const {orderList} = useOrders();
    const columns = [
        { header: "Order ID", accessor: "id"},
        { header: "Customer", accessor: "customer"},
        { header: "Amount", accessor: "amount"},
        { header: "Status", accessor: "status"},
        { header: "Date", accessor: "date"},
      ];
    return ( 
        <div>
            <h1>Orders</h1>
        </div>
     );
}
 
export default Orders;