import { useState } from "react";
import { users as initialUsers} from "../data/users"

const useUsers = () => {
  const [search, setSearch] = useState("");
  const [userList, setUserList] = useState(initialUsers);

  const [editingUserID, setEditingUserId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", role: ""});

  const filteredUsers = userList.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteUser = (id) => {
    const updatedUsers = userList.filter((user) => user.id !== id);
    setUserList(updatedUsers);
  };

  const startEdit = (user)=>{
    setEditingUserId(user.id);
    setEditForm({
        name: user.name,
        email: user.email,
        role: user.role
    });
  };

  const handleChange= (e) =>{
    setEditForm({
        ...editForm,[e.target.name]:e.target.value
    });
  };

  const saveEdit = () =>{
    const updatedUsers = userList.map((user) =>
    user.id === editingUserID ? {...user, ...editForm}: user);

    setUserList(updatedUsers);
    setEditingUserId(null);
  }


  return {
    search,
    setSearch,
    deleteUser,
    filteredUsers,
    editForm,
    editingUserID,
    startEdit,
    handleChange,
    saveEdit
  };
};

export default useUsers;
