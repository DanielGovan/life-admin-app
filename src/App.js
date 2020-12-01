import React from "react";
import { Provider } from "react-redux";

import store from "./store/store";
import TaskList from "./containers/TaskList";
import "./App.css";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <TaskList />
      </Container>
    </Provider>
  );
};

export default App;
