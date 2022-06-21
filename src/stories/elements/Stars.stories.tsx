import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Stars } from "../../elements/Stars";

const Template: ComponentStory<typeof Stars> = (args) => <Stars {...args} />;

export const FiveStars = Template.bind({});
FiveStars.args = {
  stars: 5,
};

export const GoldenStars = Template.bind({});
GoldenStars.args = {
  stars: 5,
  className: "text-yellow h-xl w-xl",
};

const meta: ComponentMeta<typeof Stars> = {
  title: "Components/Stars",
  component: Stars,
  subcomponents: { FiveStars, GoldenStars },
};

export default meta;
