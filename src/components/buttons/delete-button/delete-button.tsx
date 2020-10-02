import React from "react";
import { Button } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import styles from "./delete-button.module.scss";

export type DeleteButtonProps = {
  onClick: () => void;
  showLabel?: boolean;
  [key: string]: any;
};

export const DeleteButton = ({
  onClick,
  showLabel = true,
  ...props
}: DeleteButtonProps) => {
  return (
    <Button
      className={`${styles.deleteButton} ${showLabel ? "" : styles.iconButton}`}
      variant="contained"
      color="secondary"
      startIcon={showLabel && <DeleteIcon />}
      onClick={onClick}
      {...props}
    >
      {showLabel ? "Delete" : <DeleteIcon />}
    </Button>
  );
};
