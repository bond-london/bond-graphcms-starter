import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AspectRatioVisual } from "../../elements/AspectRatioVisual";
import { Section } from "../../layouts";
import { createVisualAssetFromLocalFile } from "../storyUtils";

const Template: ComponentStory<typeof AspectRatioVisual> = (args) => (
  <Section componentName="Avatar Selection">
    <div className="col-span-6">
      <AspectRatioVisual {...args} />
    </div>
  </Section>
);

export const HeroAspectRatio = Template.bind({});
HeroAspectRatio.args = {
  visual: createVisualAssetFromLocalFile("/hero_image_example.jpg"),
  aspectRatioClassName: "aspect-w-2 aspect-h-1",
};

export const SquareAspectRatio = Template.bind({});
SquareAspectRatio.args = {
  visual: createVisualAssetFromLocalFile("/hero_image_example.jpg"),
  aspectRatioClassName: "aspect-w-1 aspect-h-1",
};

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

export default meta;
