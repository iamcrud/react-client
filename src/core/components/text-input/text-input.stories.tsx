import React from "react";
import { Story, Meta } from "@storybook/react";
import { TextInput, TextInputProps } from "./text-input";

export default {
  title: "core/text-input",
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
