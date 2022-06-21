import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Card } from "../../elements/CardRow";
import { Section } from "../../layouts";
import { createVisualAssetFromLocalFile } from "../storyUtils";

const Template: ComponentStory<typeof Card> = (args) => (
  <Section componentName="Card Section">
    <div className="col-span-6 bg-gray p-s">
      <Card {...args} />
    </div>
  </Section>
);

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  title: "This is my card",
  visual: createVisualAssetFromLocalFile("/hero_image_example.jpg"),
};

export const CardNoImage = Template.bind({});
CardNoImage.args = {
  title: "This card has no image",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const meta: ComponentMeta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  subcomponents: { CardWithImage, CardNoImage },
  argTypes: {},
};

export default meta;
