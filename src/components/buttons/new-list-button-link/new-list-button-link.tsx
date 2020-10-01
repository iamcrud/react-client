import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

export type NewListButtonLinkProps = {
  to: string;
  [key: string]: any;
};

export const NewListButtonLink = ({ to, ...props }: NewListButtonLinkProps) => {
  return (
    <Link to={to} {...props}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<PlaylistAddIcon />}
      >
        New list
      </Button>
    </Link>
  );
};
