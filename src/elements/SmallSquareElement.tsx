import classNames from "classnames";
import React, { CSSProperties, PropsWithChildren } from "react";

export const SmallSquareElement: React.FC<
  PropsWithChildren<{
    className?: string;
    style?: CSSProperties;
  }>
> = ({ className, children, style }) => {
  return (
    <div
      className={classNames(
        className,
        "border-square h-xs w-xs bg-green text-blue",
        "flex items-center justify-center"
      )}
      style={style}
    >
      {children}
    </div>
  );
};
