import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import {
  ClassNameOverrides,
  CleanedRTF,
  RTFReferences,
} from "@bond-london/graphcms-rich-text";
import classNames from "classnames";
import React from "react";
import { AspectRatioVisual, RTF } from "../../elements";
import { Section } from "../../layouts";

export const BasicRTF: React.FC<{
  content: CleanedRTF;
  className?: string;
  classNameOverrides?: ClassNameOverrides;
  visual?: VisualAsset;
  right?: boolean;
  references: RTFReferences | undefined;
}> = ({
  right = true,
  content,
  className,
  classNameOverrides,
  visual,
  references,
}) => {
  const realClassName =
    className || visual
      ? classNames(
          "col-start-1 col-span-4",
          "tablet:row-start-1",
          right
            ? "tablet:col-start-2 tablet:col-span-6 laptop:col-start-1 laptop:col-span-7"
            : "tablet:col-start-5 tablet:col-span-4 laptop:col-start-8 laptop:col-span-4"
        )
      : "col-span-full";
  return (
    <Section
      componentName="Basic RTF"
      contentClassName="items-center gap-y-xs tablet:gap-y-0"
    >
      <RTF
        content={content}
        className={realClassName}
        classNameOverrides={classNameOverrides}
        references={references}
      />
      {visual && (
        <AspectRatioVisual
          aspectRatioClassName="aspect-square"
          className={classNames(
            "col-start-1 col-span-4",
            "tablet:row-start-1",
            right
              ? "tablet:col-start-3 tablet:col-span-4 laptop:col-start-9 laptop:col-span-4"
              : "tablet:col-start-1 tablet:col-span-4 laptop:col-start-2 laptop:col-span-4"
          )}
          visual={visual}
        />
      )}
    </Section>
  );
};
