import { linkTo } from "@storybook/addon-links";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { LinkOrButton } from "../../components/LinkOrButton";

const Template: ComponentStory<typeof LinkOrButton> = (args) => (
  <LinkOrButton {...args} />
);

export const LinkOnly = Template.bind({});
LinkOnly.args = {
  name: "Go to next example",
  action: linkTo("components-linkorbutton--button"),
};

export const Button = Template.bind({});
Button.args = {
  ...LinkOnly.args,
  name: "Click me",
  colour: "Green",
  isButton: true,
};

const meta: ComponentMeta<typeof LinkOrButton> = {
  title: "Components/LinkOrButton",
  component: LinkOrButton,
  subcomponents: { LinkOnly, Button },
};

export default meta;
