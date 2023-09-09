import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const initialState = { name: "", email: "", password: "" }
  const [user, setUser] = useState(initialState);

  const resetForm = () => {
    setUser(initialState);
  };
  const handleRegister = () => {
    localStorage.setItem("user", user);
    resetForm();
  };


  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection:"column",
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
          placeholder="Name"
          type="text"
          value={user?.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
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
        <button onClick={handleRegister}>Register</button>
      </div>

      <Link to="/login">
        <p style={{ fontSize: 14 }}>Already have Account, Login</p>
      </Link>
    </div>
  );
};

export default Register;
