import { useState } from "react";
import Table from "../components/Table";
import { users } from "../data/users";
import Modal from "../components/Modal";
import "../styles/Users.css"



const Users = () => {

  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { header: "ID", accessor: "id"},
    { header: "Name", accessor: "name"},
    { header: "Email", accessor: "email"},
    { header: "Role", accessor: "role"},
  ]
  return (
    <div>
      <h1>Users</h1>

      <button className="add-btn" onClick={() => setIsOpen(true)}>Add User</button>

      <Table columns={columns} data ={users}/>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Add User</h2>

        <input placeholder="Name"/>
        <input placeholder="Email"/>
        <input placeholder="Role"/>

        <button>Add</button>
      </Modal>
    </div>
  );
};

export default Users;
