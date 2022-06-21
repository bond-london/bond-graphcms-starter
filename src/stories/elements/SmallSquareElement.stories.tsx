import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { SmallSquareElement } from "../../elements/SmallSquareElement";

const Template: ComponentStory<typeof SmallSquareElement> = (args) => (
  <SmallSquareElement {...args} />
);

export const SimpleSquareElement = Template.bind({});
SimpleSquareElement.args = {
  className: "w-m bg-blue",
};

const meta: ComponentMeta<typeof SmallSquareElement> = {
  title: "Components/SmallSquareElement",
  component: SmallSquareElement,
  subcomponents: { SimpleSquareElement },
  argTypes: {},
};

export default meta;
