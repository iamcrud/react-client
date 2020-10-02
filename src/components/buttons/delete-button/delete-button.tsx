import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./delete-button.module.scss";

export type DeleteButtonProps = {
  showLabel?: boolean;
  className?: ButtonProps["className"];
  onClick?: ButtonProps["onClick"];
};

export const DeleteButton = ({
  showLabel = true,
  className = "",
  ...props
}: DeleteButtonProps) => (
  <Button
    className={`${className} ${styles.deleteButton} ${
      showLabel ? "" : styles.iconButton
    }`}
    variant="contained"
    color="secondary"
    startIcon={showLabel && <DeleteIcon />}
    {...props}
  >
    {showLabel ? "Delete" : <DeleteIcon />}
  </Button>
);
