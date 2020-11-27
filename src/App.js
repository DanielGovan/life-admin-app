import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import TaskList from "./containers/TaskList";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <TaskList />
    </Provider>
  );
};

export default App;
