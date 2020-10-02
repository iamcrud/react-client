import React from "react";
import { Button } from "@material-ui/core";
import { Link, LinkProps } from "react-router-dom";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

export type NewListButtonLinkProps = {
  to: string;
  className?: string;
  onClick?: LinkProps["onClick"];
};

export const NewListButtonLink = (props: NewListButtonLinkProps) => (
  <Link {...props}>
    <Button variant="contained" color="primary" startIcon={<PlaylistAddIcon />}>
      New list
    </Button>
  </Link>
);
