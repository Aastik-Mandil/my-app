import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [user, setUser] = useState(initialState);

  const resetForm = () => {
    setUser(initialState);
  };

  const handleLogin = () => {};

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "180px",
          gap: "8px",
        }}
      >
        <input
          placeholder="Email Id"
          type="text"
          value={user?.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <input
          placeholder="Password"
          type="password"
          value={user?.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <button onClick={handleLogin}>Login</button>
      </div>

      <Link to="/register">
        <p style={{ fontSize: 14 }}>Don't have Account, Register</p>
      </Link>
    </div>
  );
};

export default Login;
