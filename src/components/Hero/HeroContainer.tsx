import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { AspectRatioVisual } from "../../elements";
import { Section } from "../../layouts";

export const HeroContainer: React.FC<{
  componentName: string;
  visual?: VisualAsset;
  onVisible?: () => void;
  containerClassName?: string;
}> = ({ onVisible, visual, componentName, containerClassName, children }) => {
  return (
    <Section
      componentName={componentName}
      spacingClassName="row-start-2 row-span-4"
      className="text-white bond-row-5-s"
      preChildren={
        <div
          className={classNames(
            "col-start-1 col-span-3 bg-blue",
            "row-start-1 row-span-6",
            "tablet:row-start-1 tablet:row-span-4"
          )}
        />
      }
      onVisible={onVisible}
    >
      <div
        className={classNames(
          "pt-s laptop:pt-0",
          "self-center",
          "col-start-1 col-span-4",
          "row-start-4 row-span-3",
          "tablet:col-start-1 tablet:col-span-3",
          "laptop:col-start-1 laptop:col-span-5",
          "tablet:row-start-1 tablet:row-span-5",
          containerClassName
        )}
      >
        {children}
      </div>
      {visual && (
        <>
          <AspectRatioVisual
            className={classNames(
              "col-start-1 col-span-4 row-start-2 row-span-2",
              "tablet:col-start-5 tablet:col-span-4 tablet:row-start-2 tablet:row-span-5",
              "laptop:col-start-7 laptop:col-span-5"
            )}
            aspectRatioClassName="aspect-w-1 aspect-h-1"
            visual={visual}
          >
            <div className="bg-blue" />
          </AspectRatioVisual>
        </>
      )}
    </Section>
  );
};
