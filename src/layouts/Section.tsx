import { useFirstVisibleToUser } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";

export const CoreSection: React.FC<{
  componentName: string;
  className: string;
  contentClassName?: string;
  element?: keyof JSX.IntrinsicElements;
  preChildren?: React.ReactNode;
  postChildren?: React.ReactNode;
  visibleThreshold?: number;
  visibleDelay?: number;
  onVisible?: () => void;
}> = ({
  componentName,
  className,
  contentClassName,
  children,
  element: Element = "section",
  preChildren,
  postChildren,
  visibleThreshold,
  visibleDelay,
  onVisible,
}) => {
  const [ref] = useFirstVisibleToUser<HTMLDivElement>(
    visibleThreshold,
    visibleDelay,
    onVisible
  );

  return (
    <Element
      data-component={componentName}
      className={classNames(
        "relative grid-container container-grid",
        className
      )}
    >
      {preChildren}
      <div ref={ref} className={classNames(contentClassName)}>
        {children}
      </div>
      {postChildren}
    </Element>
  );
};

export const Section: React.FC<{
  componentName: string;
  className?: string;
  contentClassName?: string;
  spacingClassName?: string;
  topSpacing?: boolean;
  bottomSpacing?: boolean;
  element?: keyof JSX.IntrinsicElements;
  preChildren?: React.ReactNode;
  postChildren?: React.ReactNode;
  visibleThreshold?: number;
  visibleDelay?: number;
  onVisible?: () => void;
}> = ({
  componentName,
  className,
  contentClassName,
  spacingClassName,
  topSpacing = true,
  bottomSpacing = true,
  children,
  element,
  preChildren,
  postChildren,
  visibleThreshold,
  visibleDelay,
  onVisible,
}) => {
  const realSpacingClassName =
    spacingClassName ||
    (topSpacing && bottomSpacing
      ? "row-start-2 row-span-4"
      : topSpacing
      ? "row-start-2 row-span-5"
      : bottomSpacing
      ? "row-start-1 row-span-5"
      : "row-start-1 row-span-6");
  return (
    <CoreSection
      element={element}
      componentName={componentName}
      className={classNames(className)}
      contentClassName={classNames(
        realSpacingClassName,
        contentClassName,
        "relative col-start-2 col-span-1 content-grid"
      )}
      preChildren={preChildren}
      postChildren={postChildren}
      onVisible={onVisible}
      visibleDelay={visibleDelay}
      visibleThreshold={visibleThreshold}
    >
      {children}
    </CoreSection>
  );
};
