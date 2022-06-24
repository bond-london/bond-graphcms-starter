import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Accordion } from "../../components/Accordion";

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

// eslint-disable-next-line import/no-unused-modules
export const BasicAccordion = Template.bind({});
BasicAccordion.args = {
  collection: [{ title: "Accordion Title", className: "w-xl" }],
};

const meta: ComponentMeta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
};

// eslint-disable-next-line import/no-unused-modules
export default meta;
