import "../styles/UsersTable.css";
import useUsers from "../hooks/useUsers";
import usePagination from "../hooks/usePagination";

const UsersTable = () => {
  const {
    search,
    setSearch,
    filteredUsers,
    deleteUser,
    editingUserID,
    editForm,
    startEdit,
    handleChange,
    saveEdit,
  } = useUsers();

  const { currentItem, currentPage, totalPages, nextPage, prevPage} = usePagination(filteredUsers, 4);
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
          {currentItem.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingUserID === user.id ? (
                  <input
                    name="name"
                    value={editForm.name}
                    onChange={handleChange}
                  />
                ) : (
                  user.name
                )}
              </td>

              <td>
                {editingUserID === user.id ? (
                  <input
                    name="email"
                    value={editForm.email}
                    onChange={handleChange}
                  />
                ) : (
                  user.email
                )}
              </td>

              <td>
                {editingUserID === user.id ? (
                  <input
                    name="role"
                    value={editForm.role}
                    onChange={handleChange}
                  />
                ) : (
                  user.role
                )}
              </td>

              <td>
                {editingUserID === user.id ? (
                  <button className="save-btn" onClick={saveEdit}>
                    Save
                  </button>
                ) : (
                  <button className="edit-btn" onClick={() => startEdit(user)}>
                    Edit
                  </button>
                )}
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={prevPage}>Previous</button>
        <span>
            Page {currentPage} of {totalPages}
        </span>

        <button onClick={nextPage}>Next</button>

      </div>
    </div>
  );
};

export default UsersTable;
