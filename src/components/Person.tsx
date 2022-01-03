import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import React from "react";
import { AspectRatioVisual } from "../elements";

export interface Individual {
  visual?: VisualAsset;
  name: string;
  position: string;
}

export const Person: React.FC<Individual> = ({ visual, name, position }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 relative text-center">
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
