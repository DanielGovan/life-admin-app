import { Button } from "@material-ui/core";
import React from "react";

export const TaskItem = ({ name, id, deleteHandler }) => {
  return (
    <div>
      {name}{" "}
      <Button href="#" onClick={() => deleteHandler(id)}>
        X
      </Button>
    </div>
  );
};
