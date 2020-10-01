import React from "react";
import { Button } from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";

export type EditButtonProps = {
  onClick: () => void;
  [key: string]: any;
};

export const EditButton = ({ onClick, ...props }: EditButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      startIcon={<EditIcon />}
      {...props}
    >
      Edit
    </Button>
  );
};
