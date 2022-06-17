import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Stars } from "../../elements/Stars";

const Template: ComponentStory<typeof Stars> = (args) => <Stars {...args} />;

export const FiveStars = Template.bind({});
FiveStars.args = {
  stars: 5,
};

const meta: ComponentMeta<typeof Stars> = {
  title: "Components/Stars",
  component: Stars,
  subcomponents: { FiveStars },
};

export default meta;
