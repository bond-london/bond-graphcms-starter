import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Heading } from "../../components/Heading";

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

// eslint-disable-next-line import/no-unused-modules
export const Basic = Template.bind({});
Basic.args = {
  header: "Header",
};

// eslint-disable-next-line import/no-unused-modules
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

// eslint-disable-next-line import/no-unused-modules
export default meta;
