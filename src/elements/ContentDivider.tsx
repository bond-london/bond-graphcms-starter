import classNames from "classnames";
import React from "react";
import { ColourName, lookupColourClassName } from "../lookups";

export const ContentDivider: React.FC<{
  colour?: ColourName | undefined;
  className?: string;
  spacing?: "both" | "topOnly" | "bottomOnly" | "none";
}> = ({ colour, className, spacing }) => {
  const colourOrDefault = colour || "Grey";
  function lookupMarginClassName(spacing: string | undefined) {
    switch (spacing) {
      case "both":
        return "my-m";
      case "topOnly":
        return "mt-m";
      case "bottomOnly":
        return "mb-m";
      default:
        "my-0";
    }
  }
  return (
    <div
      className={classNames(
        "h-2",
        lookupMarginClassName(spacing),
        lookupColourClassName(colourOrDefault, "bg") || "bg-grey",
        className
      )}
    ></div>
  );
};
