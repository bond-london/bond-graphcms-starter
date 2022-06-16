import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { AspectRatioVisual } from "../elements";

export const Avatar: React.FC<{
  visual?: VisualAsset;
  size?: string;
  font?: string;
  colour?: string;
  initial?: string;
}> = ({ visual, size, font, colour, initial }) => {
  if (visual) {
    return (
      <AspectRatioVisual
        aspectRatioClassName="aspect-square"
        visual={visual}
        visualClassName="rounded-full"
        className={classNames(size, "drop-shadow-md")}
      />
    );
  } else {
    return (
      <div
        className={classNames(
          size,
          colour || "bg-blue",
          "rounded-full flex items-center justify-center"
        )}
      >
        <p className={font}>{initial}</p>
      </div>
    );
  }
};
