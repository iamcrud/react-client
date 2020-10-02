import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

export type EditButtonProps = {
  className?: string;
  onClick?: ButtonProps["onClick"];
};

export const EditButton = (props: EditButtonProps) => (
  <Button variant="contained" startIcon={<EditIcon />} {...props}>
    Edit
  </Button>
);
