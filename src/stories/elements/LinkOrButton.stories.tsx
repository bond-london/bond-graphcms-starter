import { linkTo } from "@storybook/addon-links";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { LinkOrButton } from "../../components/LinkOrButton";

const Template: ComponentStory<typeof LinkOrButton> = (args) => (
  <LinkOrButton {...args} />
);

// eslint-disable-next-line import/no-unused-modules
export const LinkOnly = Template.bind({});
LinkOnly.args = {
  name: "Click to see the button option",
  action: linkTo("components-linkorbutton--button"),
};

// eslint-disable-next-line import/no-unused-modules
export const Button = Template.bind({});
Button.args = {
  name: "Click me",
  colour: "Green",
  isButton: true,
};

const meta: ComponentMeta<typeof LinkOrButton> = {
  title: "Components/LinkOrButton",
  component: LinkOrButton,
  subcomponents: { LinkOnly, Button },
  argTypes: {
    action: { action: "Clicked" },
  },
};

// eslint-disable-next-line import/no-unused-modules
export default meta;
