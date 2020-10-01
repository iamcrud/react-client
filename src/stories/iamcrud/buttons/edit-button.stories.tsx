import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  EditButton,
  EditButtonProps,
} from "components/buttons/edit-button/edit-button";

export default {
  title: "IamCrud/Buttons/EditButton",
  component: EditButton,
} as Meta;

const Template: Story<EditButtonProps> = (args) => <EditButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
