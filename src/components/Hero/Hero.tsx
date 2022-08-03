import {
  AspectRatioVisual,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { useFirstVisible } from "../../utils";
import { CleanedRTF } from "@bond-london/graphcms-rich-text";
import { ColourName, lookupColourClassName } from "../../lookups";
import { RTF } from "../../elements/RTF";
import { Section } from "../../layouts/Section";
import { LinkOrButton } from "../LinkOrButton";
import { LinkInformation } from "../Navigation/NavigationBar";

export const Hero: React.FC<{
  title?: string | null;
  content?: CleanedRTF | null;
  links?: LinkInformation[] | null;
  visual?: VisualAsset | null;
  textColour?: ColourName | null;
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
            "col-span-4 col-start-1",
            "row-span-3 row-start-4",
            "tablet:col-span-3 tablet:col-start-1",
            "laptop:col-span-5 laptop:col-start-1",
            "tablet:row-span-5 tablet:row-start-1"
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
