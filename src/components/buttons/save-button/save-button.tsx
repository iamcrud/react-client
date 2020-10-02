import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

export type SaveButtonProps = {
  className?: ButtonProps["className"];
  onClick?: ButtonProps["onClick"];
};

export const SaveButton = (props: SaveButtonProps) => (
  <Button
    variant="contained"
    color="primary"
    startIcon={<PlaylistAddCheckIcon />}
    {...props}
  >
    Save
  </Button>
);
