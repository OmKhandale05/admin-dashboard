import "../styles/UsersTable.css";
import useUsers from "../hooks/useUsers";

const UsersTable = () => {
  
const {search, setSearch, filteredUsers, deleteUser} = useUsers();
  return (
    <div className="table-container">
      <h3 className="table-title">Recent Users</h3>

      <input
        type="text"
        placeholder="Search users .."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="delete-btn"
                onClick={()=> deleteUser(user.id)}>
                    Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
