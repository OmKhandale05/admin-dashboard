import Table from "../components/Table";
import { users } from "../data/users";

const Users = () => {

  const columns = [
    { header: "ID", accessor: "id"},
    { header: "Name", accessor: "name"},
    { header: "Email", accessor: "email"},
    { header: "Role", accessor: "role"},
  ]
  return (
    <div>
      <h1>Users</h1>

      <Table columns={columns} data ={users}/>
    </div>
  );
};

export default Users;
