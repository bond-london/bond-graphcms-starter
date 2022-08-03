import {
  AspectRatioVisual,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";

export const Avatar: React.FC<{
  visual?: VisualAsset;
  size?: string;
  font?: string;
  colour?: string;
  initials?: string;
}> = ({ visual, size, font, colour, initials }) => {
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
          "flex items-center justify-center rounded-full"
        )}
      >
        <p className={font}>{initials}</p>
      </div>
    );
  }
};
