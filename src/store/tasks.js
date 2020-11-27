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
      console.log("delete attempt:", action.payload);
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
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(taskAdded(task));
  } catch (e) {
    return console.error(e.message);
  }
};

export const removeTask = (id) => async (dispatch) => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(taskDeleted(id));
  } catch (e) {
    return console.error(e.message);
  }
};

// export const addTask = (task) =>
//   apiCallBegan({
//     url,
//     method: "post",
//     data: bug,
//     onSuccess: bugAdded.type,
//   });

// export const resolveBug = (id) =>
//   apiCallBegan({
//     // /bugs
//     // PATCH /bugs/1
//     url: url + "/" + id,
//     method: "patch",
//     data: { resolved: true },
//     onSuccess: bugResolved.type,
//   });

// export const assignBug = (bugId, userId) =>
//   apiCallBegan({
//     url: url + "/" + bugId,
//     method: "patch",
//     data: { userId },
//     onSuccess: bugAssignedToUser.type,
//   });

// export const loadBugs = () => (dispatch, getstate) => {
//     const { lastFetch } = getstate().entities.bugs;
//     const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
//     // console.log(lastFetch, diffInMinutes);
//     if (diffInMinutes < 10) return;
//     return dispatch(
//       apiCallBegan({
//         url,
//         onStart: bugsRequested.type,
//         onSuccess: bugsReceived.type,
//         onError: bugsRequestFailed.type,
//       })
//     );
//   };

// task states
// name: "",
// notes: "",
// count: "",
// lastBuried: "",
// interval: "",
