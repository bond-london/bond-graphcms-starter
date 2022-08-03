import { AspectRatioVisual } from "@bond-london/gatsby-graphcms-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Section } from "../../layouts/Section";
import { createVisualAssetFromLocalFile } from "../storyUtils";

const Template: ComponentStory<typeof AspectRatioVisual> = (args) => (
  <Section componentName="Avatar Selection">
    <div className="col-span-6">
      <AspectRatioVisual {...args} />
    </div>
  </Section>
);

// eslint-disable-next-line import/no-unused-modules
export const HeroAspectRatio = Template.bind({});
HeroAspectRatio.args = {
  visual: createVisualAssetFromLocalFile("/hero_image_example.jpg"),
  aspectRatioClassName: "aspect-w-2 aspect-h-1",
};

// eslint-disable-next-line import/no-unused-modules
export const SquareAspectRatio = Template.bind({});
SquareAspectRatio.args = {
  visual: createVisualAssetFromLocalFile("/hero_image_example.jpg"),
  aspectRatioClassName: "aspect-w-1 aspect-h-1",
};

// eslint-disable-next-line import/no-unused-modules
export const PortraitAspectRatio = Template.bind({});
PortraitAspectRatio.args = {
  visual: createVisualAssetFromLocalFile("/hero_image_example.jpg"),
  aspectRatioClassName: "aspect-w-1 aspect-h-2",
};

const meta: ComponentMeta<typeof AspectRatioVisual> = {
  title: "Components/AspectRatioVisual",
  component: AspectRatioVisual,
  subcomponents: { HeroAspectRatio, SquareAspectRatio, PortraitAspectRatio },
};

// eslint-disable-next-line import/no-unused-modules
export default meta;
