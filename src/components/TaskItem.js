import React from "react";

export const TaskItem = ({ name, id, deleteHandler }) => {
  return (
    <div>
      {name}{" "}
      <a href="#" onClick={() => deleteHandler(id)}>
        X
      </a>
    </div>
  );
};
