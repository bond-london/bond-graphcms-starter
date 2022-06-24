import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ContentDivider } from "../../elements/ContentDivider";

const Template: ComponentStory<typeof ContentDivider> = (args) => (
  <ContentDivider {...args} />
);

// eslint-disable-next-line import/no-unused-modules
export const SimpleDivider = Template.bind({});

// eslint-disable-next-line import/no-unused-modules
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

// eslint-disable-next-line import/no-unused-modules
export default meta;
