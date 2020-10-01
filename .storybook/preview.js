import "index.scss";
import StoryRouter from "storybook-react-router";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [StoryRouter()];
