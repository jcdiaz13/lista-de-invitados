import { useState, useEffect } from "react";
import { getItems } from "../../app/services/people";

const Read = () => {
  const [users, setUsers] = useState();

  const consult = () => {
    getItems().then((res) => {
      //Recibe elementos de people.js , actualiza el estado del componente con estos elementos y los registra en la consola.
      setUsers(res);
      console.log(res);
    });
  };

  useEffect(() => {
    consult();
  }, []);

  return (
    <div>
      <h1>READ USERS</h1>
      <div>
        {users?.map((user, key) => (
          <div key={key}>{user.userName}</div>
        ))}
      </div>
    </div>
  );
};
export default Read;
