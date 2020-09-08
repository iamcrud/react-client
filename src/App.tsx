import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";

import { Menu } from "./components/menu/menu";
import { ListModel } from "./components/list/list";
import { NoListSelected } from "./components/no-list-selected/no-list-selected";
import { ListContainer } from "./components/list/list-container";

import styles from "./App.module.scss";

type AppState = {
  lists: ListModel[];
};

function App() {
  const [state, setState] = useState<AppState>({
    lists: [],
  });

  useEffect(() => {
    axios.get("/api/lists").then(({ data: lists }) => {
      setState((state) => ({
        ...state,
        lists,
      }));
    });
  }, []);

  const removeList = (id: string) => {
    setState({
      ...state,
      lists: state.lists.filter((list) => list.id !== id),
    });
  };

  const saveList = (list: ListModel) => {
    let lists: ListModel[] = [];

    const isNewList = !state.lists.some(
      (stateList) => stateList.id === list.id
    );

    if (isNewList) {
      lists = [...state.lists, list];
    } else {
      lists = state.lists.map((stateList) =>
        stateList.id === list.id ? list : stateList
      );
    }

    setState({
      ...state,
      lists: lists,
    });
  };

  return (
    <div className={styles.app}>
      <AppBar position="sticky">
        <h1>IamCrud - React Client</h1>
      </AppBar>

      <div className={styles.container}>
        <Route path="/:id?">
          <Menu lists={state.lists} methods={{ removeList }} />
        </Route>

        <Switch>
          <Route path="/:id">
            <ListContainer lists={state.lists} methods={{ saveList }} />
          </Route>
          <Route path="/">
            <NoListSelected />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
