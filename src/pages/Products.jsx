import Table from "../components/Table";
import useProducts from "../hooks/useProducts";
import "../styles/Products.css";
import { useState } from "react";
import Modal from "../components/Modal";

const Products = () => {
  const { productList, deleteProduct, addProduct } = useProducts();
  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Price", accessor: "price" },
    { header: "Stock", accessor: "stock" },
  ];

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: ""
  });
  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

  const saveProduct = () => {
    addProduct(newProduct);

    setNewProduct({
      name: "",
      price: "",
      stock: ""
    });

    setIsOpen(false);
  };


  return (
    <div className="products-page">
      <h1>Products</h1>

      <button
          className="add-product-btn"
          onClick={() => setIsOpen(true)}
        >
          Add Product
        </button>

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
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >

        <h2>Add Product</h2>

        <input
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
        />

        <input
          name="stock"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={handleChange}
        />

        <button onClick={saveProduct}>
          Save Product
        </button>

      </Modal>
    </div>
  );
};

export default Products;
