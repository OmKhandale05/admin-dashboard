import { useState } from "react";
import { users as initialUsers} from "../data/users"

const useUsers = () => {
  const [search, setSearch] = useState("");
  const [userList, setUserList] = useState(initialUsers);

  const filteredUsers = userList.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteUser = (id) => {
    const updatedUsers = userList.filter((user) => user.id !== id);
    setUserList(updatedUsers);
  };
  return {
    userList,
    search,
    setSearch,
    deleteUser,
    filteredUsers,
  };
};

export default useUsers;
