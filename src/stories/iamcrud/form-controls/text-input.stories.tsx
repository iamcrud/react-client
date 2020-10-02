import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  TextInput,
  TextInputProps,
} from "components/form-controls/text-input/text-input";

export default {
  title: "IamCrud/FormControls/TextInput",
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
