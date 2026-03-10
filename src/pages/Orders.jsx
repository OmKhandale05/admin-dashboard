import useOrders from "../hooks/useOrders";
import Table from "../components/Table";
import "../styles/Orders.css";

const Orders = () => {
  const { orderList } = useOrders();
  const columns = [
    { header: "Order ID", accessor: "id" },
    { header: "Customer", accessor: "customer" },
    { header: "Amount", accessor: "amount" },
    {
      header: "Status",
      accessor: "status",
      render: (row) => (
        <span className={`status-${row.status.toLowerCase()}`}>
          {row.status}
        </span>
      ),
    },
    { header: "Date", accessor: "date" },
  ];
  return (
    <div className="orders-page">
      <h1>Orders</h1>
      <Table columns={columns} data={orderList} />
    </div>
  );
};

export default Orders;
