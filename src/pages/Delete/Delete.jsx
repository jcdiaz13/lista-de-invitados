import { useEffect, useState } from "react";
import { deleteItem, getItems } from "../../app/services/people";
const Delete = () => {
  // const [users, setUsers] = useState();
  const [usersId, setUsersId] = useState();

  const consult = () => {
    getItems().then((res) => {
      setUsers(res);
      console.log(res);
    });
  };

  useEffect(() => {
    consult();
  }, []);

  const handleDeleteUser = async () => {
    await deleteItem(usersId);
    consult();
    setUsersId("");
  };

  return (
    <div>
      <h1>DELETE USER</h1>
      <input
        type="text"
        value={usersId}
        placeholder="Delete User"
        onChange={(e) => setUsersId(e.target.value)}
      />
      <button onClick={handleDeleteUser}>DELETE</button>
    </div>
  );
};

export default Delete;
