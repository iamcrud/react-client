import React from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

import { ListModel } from "lists/lists.model";
import { useLists } from "lists/lists.hooks";

import { Menu } from "components/menu/menu";
import { NoListSelected } from "components/no-list-selected/no-list-selected";
import { ListContainer } from "components/list/list-container";

import styles from "./App.module.scss";

type AppState = {
  lists: ListModel[];
};

function App() {
  const { lists, createList, updateList, deleteList } = useLists();

  return (
    <div className={styles.app}>
      <AppBar position="sticky">
        <h1>IamCrud - React Client</h1>
      </AppBar>

      <div className={styles.container}>
        <Route path="/:id?">
          <Menu lists={lists} methods={{ deleteList }} />
        </Route>

        <Switch>
          <Route path="/:id">
            <ListContainer lists={lists} methods={{ createList, updateList }} />
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
