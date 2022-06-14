import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Getting Started/Intro", module);

stories.add("Intro", () => {
  return (
    <div className="flex flex-col gap-s">
      <h1 className="h1">Bond London GraphCMS Starter Template</h1>
      <div>
        <h2 className="h2 mb-xxs">About</h2>
        <p className="p4">
          This is a template UI kit and design system for an example Gatsby
          project, with content sourced from GraphCMS/GraphQL.
        </p>
      </div>
      <div>
        <h2 className="h2 mb-xxs">Purpose</h2>
        <p className="p4">
          The purpose of this project is to create a unified toolkit that is
          used by our designers and developers on Bond London projects, to
          ensure that all of our projects are accessible and have a consistent
          look and feel.
        </p>
      </div>
      <div>
        <h2 className="h2 mb-xxs">Component Toolkit</h2>
        <p className="p4">
          We follow a component architetcure approach orientated around
          reusability and a clean, concise codebase. The components and elements
          documented in this project can be customised and further tweaked,
          thereby simplifying and accelerating the development of our
          websites/software.
        </p>
      </div>
    </div>
  );
});
