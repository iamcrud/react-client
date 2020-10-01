import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  DeleteButton,
  DeleteButtonProps,
} from "components/buttons/delete-button/delete-button";

export default {
  title: "IamCrud/Buttons/DeleteButton",
  component: DeleteButton,
} as Meta;

const Template: Story<DeleteButtonProps> = (args) => <DeleteButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
