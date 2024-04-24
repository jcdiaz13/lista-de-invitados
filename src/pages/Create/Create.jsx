import { useState } from "react";
import { createPerson } from "../../app/services/people";

const Create = () => {
  const [userName, setUserName] = useState();

  const handleAddPerson = async () => {
    await createPerson({ userName: userName });
  };

  return (
    <div>
      <h1>ADD USER</h1>
      <input
        type="text"
        placeholder="Add User"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleAddPerson}>Add Person</button>
    </div>
  );
};

export default Create;
