import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();

  const username = useSelector((state: any) => state.user.value.username);

  return (
    <div>
      {username}
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Login;
