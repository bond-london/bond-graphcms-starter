import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AccordionRow } from "../../elements/AccordionRow";

const Template: ComponentStory<typeof AccordionRow> = (args) => (
  <AccordionRow {...args} />
);

// eslint-disable-next-line import/no-unused-modules
export const BasicAccordion = Template.bind({});
BasicAccordion.args = {
  title: "Accordion Title",
  className: "w-xl",
};

const meta: ComponentMeta<typeof AccordionRow> = {
  title: "Components/AccordionRow",
  component: AccordionRow,
};

// eslint-disable-next-line import/no-unused-modules
export default meta;
