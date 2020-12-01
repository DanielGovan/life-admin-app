import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { addTask, removeTask } from "../store/tasks";
import Header from "../components/Header";
import { TaskItem } from "../components/TaskItem";
import { styled } from "@material-ui/core/styles";
import { Button, Card, FormHelperText, TextField } from "@material-ui/core";

// In this container, handle all the functions and the state management, so all nested components are dumb, working instead with actions & selectors

const StyledCard = styled(Card)({
  padding: "30px",
  margin: "20px auto",
  maxWidth: "400px",
});

let taskId = 0;
const TodoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Sets an ID (needs a better way)
    data.id = taskId;
    taskId++;
    console.log("Task added: ", data);
    // Calls the addTask action
    dispatch(addTask(data));
    // Clear the input field
    reset({});
  };

  const deleteHandler = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <>
      <Header />
      <StyledCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="taskName"
            placeholder="Enter a new task"
            className={`form-control ${errors.taskName ? "is-invalid" : ""}`}
            inputRef={register({ required: true })}
          />
          <Button className="btn btn-primary btn-block" type="submit">
            Add Task
          </Button>
          {errors.taskName && (
            <FormHelperText>This field is required</FormHelperText>
          )}
        </form>
      </StyledCard>

      <StyledCard>
        <h4>List of tasks</h4>
        {tasks.list &&
          tasks.list.map((task) => (
            <TaskItem
              name={task.taskName}
              key={task.id}
              id={task.id}
              deleteHandler={deleteHandler}
            />
          ))}
      </StyledCard>
    </>
  );
};

export default TodoList;
