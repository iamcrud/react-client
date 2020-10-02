import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export type AddButtonProps = {
  className?: string;
  onClick?: ButtonProps["onClick"];
};

export const AddButton = (props: AddButtonProps) => (
  <Button
    variant="contained"
    color="primary"
    startIcon={<AddIcon />}
    {...props}
  >
    Add
  </Button>
);
