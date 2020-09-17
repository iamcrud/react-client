import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListIcon from "@material-ui/icons/List";
import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

export function Menu() {
  return (
    <div className={styles.menu}>
      <List>
        <Link to="/lists">
          <ListItem button>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Lists" className={styles.menuItem} />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
