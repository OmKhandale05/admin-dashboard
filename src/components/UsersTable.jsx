import "../styles/UsersTable.css";

const users = [
  { id: 1, name: "John Doe", email: "john@gmail.com", role: "Admin" },
  { id: 2, name: "Dane Hal", email: "dane@gmail.com", role: "User" },
  { id: 3, name: "Michel Nil", email: "nilm@gmail.com", role: "Editor" },
  { id: 4, name: "Ali Ahmad", email: "ali@gmail.com", role: "User" },
  { id: 5, name: "Peter jonas", email: "pettr@gmail.com", role: "User" },
];

const UsersTable = () => {
  return (
    <div className="table-container">
      <h3 className="table-title">Recent Users</h3>

      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
