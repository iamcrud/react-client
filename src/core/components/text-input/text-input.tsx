import React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";

export type TextInputProps = {
  label?: string;
  value?: string;
  className?: TextFieldProps["className"];
  onChange?: TextFieldProps["onChange"];
  onKeyDown?: TextFieldProps["onKeyDown"];
};

export const TextInput = (props: TextInputProps) => (
  <TextField variant="outlined" size="small" {...props} />
);
