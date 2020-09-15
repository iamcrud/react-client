import React from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

import { useLists } from "lists/lists.hook";

import { Menu } from "components/menu/menu";
/* import { NoListSelected } from "components/no-list-selected/no-list-selected"; */
import { ListViewContainer } from "components/list-view/list-view-container";

import styles from "./App.module.scss";
import { ListsView } from "components/lists-view/lists-view";

function App() {
  const { lists, createList, updateList, deleteList } = useLists();

  return (
    <div className={styles.app}>
      <AppBar position="sticky">
        <h1>IamCrud - React Client</h1>
      </AppBar>

      <div className={styles.container}>
        <Menu />
        {/*  <Route path="/:id?">
          <Menu lists={lists} methods={{ deleteList }} />
        </Route> */}

        <Switch>
          <Route path="/lists/:id">
            <ListViewContainer methods={{ createList, updateList }} />
          </Route>
          {/* <Route path="/">
            <NoListSelected />
          </Route> */}
          <Route path="/lists">
            <ListsView lists={lists} methods={{ deleteList }} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
