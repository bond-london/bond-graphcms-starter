import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Person } from "../../components";
import { createVisualAssetFromLocalFile } from "../storyUtils";

const Template: ComponentStory<typeof Person> = (args) => <Person {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  visual: createVisualAssetFromLocalFile("/female-silhouette.png"),
  name: "Test image",
  position: "Manager",
};

const meta: ComponentMeta<typeof Person> = {
  title: "Components/Person",
  component: Person,
  subcomponents: { Basic },
};

export default meta;
