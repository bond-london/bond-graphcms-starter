import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Heading } from "../components/Heading";

const meta: ComponentMeta<typeof Heading> = {
  title: "Heading",
  component: Heading,
};

export default meta;

export const Full: ComponentStory<typeof Heading> = () => (
  <Heading preHeader="Pre header" header="Header" postHeader="Post header" />
);

export const HeaderOnly: ComponentStory<typeof Heading> = () => (
  <Heading header="Header" />
);
