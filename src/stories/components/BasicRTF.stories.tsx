import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { BasicRTF } from "../../components/Text/BasicRTF";

const Template: ComponentStory<typeof BasicRTF> = (args) => (
  <BasicRTF {...args} />
);

export const Article = Template.bind({});
Article.args = {
  className: "w-m text-black",
};

const meta: ComponentMeta<typeof BasicRTF> = {
  title: "Components/RTF",
  component: BasicRTF,
  subcomponents: { Article },
  argTypes: {},
};

export default meta;
