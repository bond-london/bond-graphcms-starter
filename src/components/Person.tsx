import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { AspectRatioVisual } from "../elements";

export interface Individual {
  visual?: VisualAsset;
  name: string;
  position: string;
  className?: string;
}

export const Person: React.FC<Individual> = ({
  visual,
  name,
  position,
  className,
}) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-1 grid-rows-2 relative text-center",
        className
      )}
    >
      <AspectRatioVisual
        className="row-start-1 row-span-2"
        aspectRatioClassName="aspect-square"
        visual={visual}
        visualClassName="rounded-normal"
      />
      <div className="row-start-3 row-span-1">
        <h3 className="h3 pt-s">{name}</h3>
        <p className="p3 pt-xxs">{position}</p>
      </div>
    </div>
  );
};
