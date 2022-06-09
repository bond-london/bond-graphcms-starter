import {
  AutoVisualNoLottie,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React, { lazy, PropsWithChildren, Suspense } from "react";

const AutoVisualWithLottie = lazy(() =>
  import("@bond-london/gatsby-graphcms-components/dist/lottie").then((m) => ({
    default: m.AutoVisualWithLottie,
  }))
);

export const AspectRatioVisual: React.FC<
  PropsWithChildren<{
    visual?: VisualAsset;
    className?: string;
    aspectRatioClassName: string;
    visualClassName?: string;
  }>
> = ({
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
  if (hasLottie) {
    return (
      <div className={classNames("relative", className)}>
        <div className={aspectRatioClassName}>
          {children}
          <Suspense fallback={<div>Loading...</div>}>
            <AutoVisualWithLottie
              visual={visual}
              fitParent={true}
              className={visualClassName}
              loopDelay={loopDelay}
            />
          </Suspense>
        </div>
      </div>
    );
  }
  return (
    <div className={classNames("relative", className)}>
      <div className={aspectRatioClassName}>
        {children}
        <AutoVisualNoLottie
          visual={visual}
          fitParent={true}
          className={visualClassName}
        />
      </div>
    </div>
  );
};
