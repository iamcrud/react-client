import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  SaveButton,
  SaveButtonProps,
} from "components/buttons/save-button/save-button";

export default {
  title: "IamCrud/Buttons/SaveButton",
  component: SaveButton,
} as Meta;

const Template: Story<SaveButtonProps> = (args) => <SaveButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
