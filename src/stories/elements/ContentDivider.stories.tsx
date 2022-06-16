import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ContentDivider } from "../../elements/ContentDivider";

const Template: ComponentStory<typeof ContentDivider> = (args) => (
  <ContentDivider {...args} />
);

export const SimpleDivider = Template.bind({});

export const CustomColour = Template.bind({});
CustomColour.args = {
  ...SimpleDivider.args,
  colour: "Green",
};

const meta: ComponentMeta<typeof ContentDivider> = {
  title: "Components/ContentDivider",
  component: ContentDivider,
  subcomponents: { SimpleDivider, CustomColour },
  argTypes: {
    spacing: {
      options: ["both", "topOnly", "bottomOnly", "none"],
      control: { type: "radio" },
    },
  },
};

export default meta;
