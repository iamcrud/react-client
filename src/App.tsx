import React from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

import { useLists } from "lists/lists.hook";

import { Menu } from "components/menu/menu";
import { LandingView } from "components/landing-view/landing-view";
import { ListView } from "components/list-view/list.view";
import { ListsView } from "components/lists-view/lists-view";
import { PageNotFound } from "components/page-not-found/page-not-found";

import styles from "./App.module.scss";

function App() {
  const { lists, createList, updateList, deleteList } = useLists();

  return (
    <div className={styles.app}>
      <AppBar position="sticky">
        <h1>IamCrud - React Client</h1>
      </AppBar>

      <div className={styles.container}>
        <Menu />

        <Switch>
          <Route exact path="/lists/:id">
            <ListView methods={{ createList, updateList, deleteList }} />
          </Route>
          <Route exact path="/lists">
            <ListsView lists={lists} />
          </Route>
          <Route exact path="/">
            <LandingView />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
