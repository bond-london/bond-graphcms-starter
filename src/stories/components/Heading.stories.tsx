import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Heading } from "../../components/Heading";

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  header: "Header",
};

export const Full = Template.bind({});
Full.args = {
  ...Basic.args,
  preHeader: "Pre Heading",
  postHeader: "Post Heading",
};

const meta: ComponentMeta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  subcomponents: { Basic, Full },
  argTypes: {
    preHeader: { control: { type: "text" } },
    postHeader: { control: { type: "text" } },
  },
};

export default meta;
