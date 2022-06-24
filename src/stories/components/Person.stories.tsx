import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Person } from "../../components/Person";
import { createVisualAssetFromLocalFile } from "../storyUtils";

const Template: ComponentStory<typeof Person> = (args) => <Person {...args} />;

// eslint-disable-next-line import/no-unused-modules
export const Basic = Template.bind({});
Basic.args = {
  personData: {
    avatar: {
      image: createVisualAssetFromLocalFile("/female-silhouette.png"),
      initials: "TI",
    },
    name: "Test image",
    position: "Manager",
  },
};

const meta: ComponentMeta<typeof Person> = {
  title: "Components/Person",
  component: Person,
  subcomponents: { Basic },
};

// eslint-disable-next-line import/no-unused-modules
export default meta;
