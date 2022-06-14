import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Design System/Colour", module);

stories.add("Colours", () => {
  return (
    <div className="flex flex-col text-black">
      <h1>Colours will go here</h1>
    </div>
  );
});
