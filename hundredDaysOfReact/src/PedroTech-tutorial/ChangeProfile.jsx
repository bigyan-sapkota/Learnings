import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "./PedroTech";

export const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setNewUsername] = useState("");
  return (
    <div>
      <input
        type="text"
        value={newUsername}
        placeholder="Enter the Username"
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => setUsername(newUsername)}>Change Username</button>
    </div>
  );
};
