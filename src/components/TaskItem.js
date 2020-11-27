import React from "react";
import { useSelector } from "react-redux";

export const TaskItem = (props) => {
  const todo = useSelector((state) => state.todos[props.id]);
  return <div>{todo.text}</div>;
};
