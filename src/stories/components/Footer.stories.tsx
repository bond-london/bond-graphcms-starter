import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Footer } from "../../components/Footer/Footer";

const meta: ComponentMeta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
};

// eslint-disable-next-line import/no-unused-modules
export default meta;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

// eslint-disable-next-line import/no-unused-modules
export const Simple = Template.bind({});
Simple.args = {
  columns: [
    [
      {
        type: "Logo",
        size: "Small",
        text: "HELLO",
      },
    ],
  ],
  lastRow: [
    [
      {
        type: "Logo",
        size: "Small",
        text: "HELLO",
      },
    ],
  ],
};
