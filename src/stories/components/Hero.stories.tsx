import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { createVisualAssetFromLocalFile } from "../storyUtils";

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

// eslint-disable-next-line import/no-unused-modules
export const BasicHero = Template.bind({});
BasicHero.args = {
  title: "Page Title",
};

// eslint-disable-next-line import/no-unused-modules
export const ImageHero = Template.bind({});
ImageHero.args = {
  ...BasicHero.args,
  visual: createVisualAssetFromLocalFile("/hero_image_example.jpg"),
  textColour: "White",
};

const meta: ComponentMeta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
  subcomponents: { BasicHero, ImageHero },
};

// eslint-disable-next-line import/no-unused-modules
export default meta;
