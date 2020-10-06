import React from "react";
import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@material-ui/core";
import styles from "./button.module.scss";

export type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  color?: MaterialButtonProps["color"];
  className?: MaterialButtonProps["className"];
  onClick?: MaterialButtonProps["onClick"];
};

export const Button = ({
  text = "",
  icon,
  color,
  className = "",
  ...props
}: ButtonProps) => (
  <div className={styles.root}>
    <MaterialButton
      className={`${className} ${text ? "" : styles.iconOnly}`}
      variant="contained"
      color={color}
      startIcon={text ? icon : null}
      {...props}
    >
      {text ? text : icon}
    </MaterialButton>
  </div>
);
