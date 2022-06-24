import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Avatar } from "../../elements/Avatar";
import { Section } from "../../layouts/Section";
import { createVisualAssetFromLocalFile } from "../storyUtils";

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Section componentName="Avatar Selection">
    <div className="col-span-full flex gap-s">
      <Avatar {...args} size="w-s h-s" font="h5" />
      <Avatar {...args} size="w-m h-m" font="h3" />
      <Avatar {...args} size="w-l h-l" font="h1" />
    </div>
  </Section>
);

// eslint-disable-next-line import/no-unused-modules
export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
  visual: createVisualAssetFromLocalFile("/female-silhouette.png"),
};

// eslint-disable-next-line import/no-unused-modules
export const NoImageAvatar = Template.bind({});
NoImageAvatar.args = { colour: "bg-blue text-white", initials: "JT" };

const meta: ComponentMeta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    colour: {
      control: { type: "color" },
    },
  },
};

// eslint-disable-next-line import/no-unused-modules
export default meta;
