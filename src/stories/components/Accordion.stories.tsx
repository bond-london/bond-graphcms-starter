import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Accordion } from "../../components";

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const BasicAccordion = Template.bind({});
BasicAccordion.args = {
  collection: [{ title: "Accordion Title", className: "w-xl" }],
};

const meta: ComponentMeta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
};

export default meta;
