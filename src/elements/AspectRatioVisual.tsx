import {
  AutoVisualNoLottie,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import loadable from "@loadable/component";

const AutoVisualWithLottie = loadable(
  () => import("@bond-london/gatsby-graphcms-components"),
  { resolveComponent: (lib) => lib.AutoVisualWithLottie }
);

export const AspectRatioVisual: React.FC<{
  visual?: VisualAsset;
  className?: string;
  aspectRatioClassName: string;
  visualClassName?: string;
}> = ({
  visual,
  className,
  aspectRatioClassName,
  visualClassName,
  children,
}) => {
  if (!visual) {
    return null;
  }
  const loopDelay = visual.loop ? undefined : 15000;

  const hasLottie = !!visual.animation;
  const Component = hasLottie ? AutoVisualWithLottie : AutoVisualNoLottie;
  return (
    <div className={classNames("relative", className)}>
      <div className={aspectRatioClassName}>
        {children}
        <Component
          visual={visual}
          fitParent={true}
          className={visualClassName}
          loopDelay={loopDelay}
          cover={true}
        />
      </div>
    </div>
  );
};
