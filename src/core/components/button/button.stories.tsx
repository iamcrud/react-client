import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./button";
import { Delete } from "@material-ui/icons";

export default {
  title: "core/button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultColor = Template.bind({});
DefaultColor.args = {
  text: "default",
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  color: "primary",
  text: "primary",
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  text: "secondary",
  color: "secondary",
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  text: "delete",
  color: "secondary",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  color: "secondary",
  icon: <Delete />,
};

export const IconAndText = Template.bind({});
IconAndText.args = {
  text: "delete",
  color: "secondary",
  icon: <Delete />,
};
