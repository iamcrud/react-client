import React from "react";
import { Button } from "@material-ui/core";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

export type SaveButtonProps = {
  onClick: () => void;
  [key: string]: any;
};

export const SaveButton = ({ onClick, ...props }: SaveButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<PlaylistAddCheckIcon />}
      onClick={onClick}
      {...props}
    >
      Save
    </Button>
  );
};
