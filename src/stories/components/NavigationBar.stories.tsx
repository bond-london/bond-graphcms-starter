import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { NavigationBar } from "../../components/Navigation/NavigationBar";
import { linkTo } from "@storybook/addon-links";

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
);

// eslint-disable-next-line import/no-unused-modules
export const Nav = Template.bind({});
Nav.args = {
  menu: {
    items: [
      { name: "Header", action: linkTo("components-heading--basic") },
      {
        name: "Link Or Button",
        action: linkTo("components-linkorbutton--link-only"),
      },
      { name: "Person", action: linkTo("components-person--basic") },
      {
        name: "Content Divider",
        action: linkTo("components-contentdivider--simple-divider"),
      },
    ],
  },
};

const meta: ComponentMeta<typeof NavigationBar> = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  subcomponents: { Nav },
};

// eslint-disable-next-line import/no-unused-modules
export default meta;
