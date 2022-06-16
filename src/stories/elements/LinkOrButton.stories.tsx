import { linkTo } from "@storybook/addon-links";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { LinkOrButton } from "../../components/LinkOrButton";

const Template: ComponentStory<typeof LinkOrButton> = (args) => (
  <LinkOrButton {...args} />
);

export const LinkOnly = Template.bind({});
LinkOnly.args = {
  name: "Click to see the button option",
  action: linkTo("components-linkorbutton--button"),
};

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

export default meta;
