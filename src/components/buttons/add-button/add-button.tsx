import React from "react";
import { Button } from "@material-ui/core";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

export type AddButtonProps = {
  onClick: () => void;
  [key: string]: any;
};

export const AddButton = ({ onClick, ...props }: AddButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<PlaylistAddCheckIcon />}
      onClick={onClick}
      {...props}
    >
      Add
    </Button>
  );
};
