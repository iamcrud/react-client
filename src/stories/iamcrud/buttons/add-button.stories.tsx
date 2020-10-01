import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  AddButton,
  AddButtonProps,
} from "components/buttons/add-button/add-button";

export default {
  title: "IamCrud/Buttons/AddButton",
  component: AddButton,
} as Meta;

const Template: Story<AddButtonProps> = (args) => <AddButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
