import React from "react";
import { Story, Meta } from "@storybook/react";

import { Header, HeaderProps } from "../../../components/header/header";

export default {
  title: "IamCrud/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
