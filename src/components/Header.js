import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Link to="/">
          <p>Home</p>
        </Link>

        {localStorage.getItem("user") && (
          <Link to="/todo">
            <p>Todo List</p>
          </Link>
        )}
      </div>

      <div style={{}}>
        {localStorage.getItem("user") ? (
          <p>{localStorage.getItem("user")?.emai}</p>
        ) : (
          <Link to="/login">
            <p>Login</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
