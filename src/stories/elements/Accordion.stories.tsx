import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AccordionRow } from "../../elements";

const Template: ComponentStory<typeof AccordionRow> = (args) => (
  <AccordionRow {...args} />
);

export const BasicAccordion = Template.bind({});
BasicAccordion.args = {
  title: "Accordion Title",
  className: "w-xl",
};

const meta: ComponentMeta<typeof AccordionRow> = {
  title: "Components/AccordionRow",
  component: AccordionRow,
};

export default meta;
