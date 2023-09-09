import React from "react";

const Todo = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map((item, ind) => (
        <p key={ind}>{item}</p>
      ))}
    </div>
  );
};

export default Todo;
