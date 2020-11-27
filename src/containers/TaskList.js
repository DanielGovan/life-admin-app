import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { addTask, removeTask } from "../store/tasks";
import Header from "../components/Header";
import { TaskItem } from "../components/TaskItem";

// In this container, handle all the functions and the state management, so all nested components are dumb, working instead with actions & selectors

let taskId = 0;
const TodoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Sets an ID (needs a better way)
    data.id = taskId;
    taskId++;
    console.log("Task added: ", data.taskName);
    // Calls the addTask action
    dispatch(addTask(data));
    // Clear the input field
    reset({});
  };

  const deleteHandler = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      <Header />
      Add new task
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="taskName"
          placeholder="Enter a new task"
          className={`form-control ${errors.taskName ? "is-invalid" : ""}`}
          ref={register({ required: true })}
        />
        {errors.taskName && <p>This field is required</p>}
        <input className="btn btn-primary btn-block" type="submit" />
      </form>
      <br /> <h4>List of tasks</h4>
      {tasks.list.length === 0
        ? ""
        : tasks.list.map((task) => (
            <p key={task.id}>
              {task.taskName}{" "}
              <a href="#" onClick={() => deleteHandler(task.id)}>
                X
              </a>
            </p>
          ))}
      {/* <TaskItem id="0" /> */}
    </div>
  );
};

export default TodoList;
