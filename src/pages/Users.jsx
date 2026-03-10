import { useState } from "react";
import Table from "../components/Table";
import { users } from "../data/users";
import Modal from "../components/Modal";
import "../styles/Users.css";
import usePagination from "../hooks/usePagination";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );


  const { currentItem, currentPage, totalPages, nextPage, prevPage } =
    usePagination(filteredUsers, 5);

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
  ];
  return (
    <div className="users-page">
      <div className="users-header">
        <h1>Users</h1>
      </div>
      <div className="user-controls">
      <input
          type="text"
          placeholder="Search users .."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="add-btn" onClick={() => setIsOpen(true)}>
          Add User
        </button>

      </div>
      

      <div className="table-card">
        <Table
          columns={columns}
          data={currentItem}
          actions={(user) => (
            <div className="table-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          )}
        />
      </div>

      <div className="pagination">
        <button onClick={prevPage}>Previous</button>
        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button onClick={nextPage}>Next</button>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Add User</h2>

        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Role" />

        <button>Add</button>
      </Modal>
    </div>
  );
};

export default Users;
