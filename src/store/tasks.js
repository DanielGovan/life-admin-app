import { createSlice } from "@reduxjs/toolkit";

// Slice!

const slice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    taskAdded: (tasks, action) => {
      tasks.list.push(action.payload);
      tasks.loading = true;
    },
    taskDeleted: (tasks, action) => {
      //   console.log("delete attempt:", action.payload);
      tasks.list = tasks.list.filter((task) => task.id !== action.payload);
    },
    taskUpdated: (tasks, action) => {
      // tasks.list.push(action.payload);
    },
    taskBuried: (tasks, action) => {
      // tasks.list.push(action.payload);
    },
  },
});

export default slice.reducer;

//  ACTIONS: things that have happened
// these conts being unexposed is the killer reason for the dux method imo. If you have 3 or 4 files per slice everything needs to be exported. Better to decouple and differentiate between internals and externals.

const { taskAdded, taskUpdated, taskDeleted, taskBuried } = slice.actions;

// Action Creators - COMMANDS eg addBug, interacts with the backend, where above the actions above are events eg bugAdded, which just update the store, which shouldn't be dispatched from the UI, so don't export them!

// this action is a plain object so has no access to the state, if we want it to have access we need it to be a function via currying

// TODO Can/should these be simplified?
export const addTask = (task) => async (dispatch) => {
  try {
    dispatch(taskAdded(task));
  } catch (e) {
    return console.error(e.message);
  }
};

export const removeTask = (id) => async (dispatch) => {
  try {
    dispatch(taskDeleted(id));
  } catch (e) {
    return console.error(e.message);
  }
};

// task states
// name: "",
// notes: "",
// count: "",
// lastBuried: "",
// interval: "",
