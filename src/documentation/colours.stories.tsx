import React from "react";
import { storiesOf } from "@storybook/react";
import tailwindConfig from "../../tailwind.config.json";
import classNames from "classnames";
import { Section } from "../layouts";

function mapObject<T, K = string>(o: { [s: string]: T }) {
  return Object.entries(o).map(([key, value]) => ({
    key: key as unknown as K,
    value,
  }));
}

const stories = storiesOf("Design System/Colour", module);
const colours = mapObject(tailwindConfig.colorOptions);

stories.add("Colours", () => {
  return (
    <Section componentName="Colours" className="text-black">
      {colours.map(({ key, value }) => (
        <div key={value} className="col-span-2">
          <div className="m-xs flex flex-col">
            <h3 className="p4">{key}</h3>
            <p className="p4">{value}</p>
          </div>
          <div
            key={key}
            className={classNames(
              "aspect-w-1 aspect-h-1",
              key === "grey-900" && "text-gray-100"
            )}
            style={{ backgroundColor: value }}
          ></div>
        </div>
      ))}
    </Section>
  );
});
