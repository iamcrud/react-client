import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  NewListButtonLink,
  NewListButtonLinkProps,
} from "components/buttons/new-list-button-link/new-list-button-link";

export default {
  title: "IamCrud/Buttons/NewListButtonLink",
  component: NewListButtonLink,
} as Meta;

const Template: Story<NewListButtonLinkProps> = (args) => (
  <NewListButtonLink {...args} />
);

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
