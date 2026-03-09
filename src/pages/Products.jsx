import Table from "../components/Table";
import useProducts from "../hooks/useProducts";
import "../styles/Products.css";

const Products = () => {
  const { productList, deleteProduct } = useProducts();

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Price", accessor: "price" },
    { header: "Stock", accessor: "stock" },
  ];

  return (
    <div className="products-page">
      <h1>Products</h1>

      <Table
        columns={columns}
        data={productList}
        actions={(product) => (
          <div className="table-actions">
            <button className="edit-btn">Edit</button>
            <button
              className="delete-btn"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default Products;
