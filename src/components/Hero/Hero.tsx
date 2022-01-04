import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { LinkOrButton, NamedLinkInformation } from "..";
import { AspectRatioVisual, RTF } from "../../elements";
import { useFirstVisible } from "../../utils";
import { RTFContent } from "@bond-london/graphcms-rich-text";
import { Section } from "../../layouts";
import { ColourName, lookupColourClassName } from "../../lookups";

export const Hero: React.FC<{
  title?: string;
  content?: RTFContent;
  links?: NamedLinkInformation[];
  visual?: VisualAsset;
  textColour?: ColourName;
}> = ({ title, content, links, visual, textColour }) => {
  const [onVisible, animationMode] = useFirstVisible();
  const hasInside = title || content || links;
  return (
    <Section
      className={classNames(lookupColourClassName(textColour, "text"))}
      componentName="Hero"
      onVisible={onVisible}
      preChildren={
        visual && (
          <AspectRatioVisual
            className="col-span-full row-span-full"
            aspectRatioClassName="aspect-w-16 aspect-h-9"
            visual={visual}
          />
        )
      }
    >
      {hasInside && (
        <div
          className={classNames(
            "pt-s laptop:pt-0",
            "self-center",
            "col-start-1 col-span-4",
            "row-start-4 row-span-3",
            "tablet:col-start-1 tablet:col-span-3",
            "laptop:col-start-1 laptop:col-span-5",
            "tablet:row-start-1 tablet:row-span-5"
          )}
        >
          {title && (
            <h1
              className={classNames(
                animationMode,
                "h1 animate-enter-from-bottom"
              )}
            >
              {title}
            </h1>
          )}
          {content && (
            <RTF
              classNameOverrides={{
                h1: "p1 my-xs",
                h2: "p2 my-xs",
                h3: "p3 my-xs",
                h4: "p4 my-xs",
                h5: "p4 my-xs",
                h6: "p4 my-xs",
                p: "p2",
              }}
              className={classNames(
                animationMode,
                "animate-enter-from-bottom animation-delay-100"
              )}
              content={content}
            />
          )}
          {links && (
            <div
              className={classNames(
                animationMode,
                "animation-delay-200",
                "animate-appear",
                "flex space-x-xs"
              )}
            >
              {links.map((link, index) => (
                <LinkOrButton key={index} isButton={true} {...link} />
              ))}
            </div>
          )}
        </div>
      )}
    </Section>
  );
};
