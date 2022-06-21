import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import { CleanedRTF } from "@bond-london/graphcms-rich-text";
import React from "react";
import { LinkInformation } from "../components";
import { AspectRatioVisual, RTF } from "../elements";
import classNames from "classnames";

export interface CardRowType {
  id: string;
  icon?: VisualAsset;
  visual?: VisualAsset;
  title: string;
  subtitle?: string;
  copy?: CleanedRTF;
  links?: LinkInformation[];
}

export const Card: React.FC<{
  visual?: VisualAsset;
  title: string;
  subtitle?: string;
  copy?: CleanedRTF;
  className?: string;
}> = ({ visual, title, subtitle, copy }) => {
  return (
    <div className="col-span-4 flex flex-col gap-y-s bg-gray-200 pt-m">
      <div className="mx-s flex flex-col gap-y-xxs">
        <h2 className="h4">{title}</h2>
        <h4 className="h4">{subtitle}</h4>
        {copy && <RTF className="p1" content={copy} />}
      </div>
      {visual && (
        <div className="aspect-w-6 aspect-h-3">
          <AspectRatioVisual
            aspectRatioClassName="aspect-square"
            visual={visual}
            className={classNames("drop-shadow-md")}
          />
        </div>
      )}
    </div>
  );
};
