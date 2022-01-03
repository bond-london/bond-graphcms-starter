import {
  AutoVisualNoLottie,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";
import { Icon, NamedLinkColour, NamedLinkInformation } from ".";

export function getButtonColour(colour?: NamedLinkColour): string {
  switch (colour) {
    case "Blue":
      return "blue-button";
    case "WhiteBlue":
      return "white-blue-button";
    case "WhiteGreen":
      return "white-green-button";
  }
  return "green-button";
}

export const LinkOrButton: React.FC<
  NamedLinkInformation & {
    visual?: VisualAsset;
    className?: string;
    iconClassName?: string;
    isButton?: boolean;
    action?: () => void;
  }
> = ({
  className,
  internal,
  external,
  newPage,
  action,
  isButton,
  name,
  colour,
  children,
  icon,
  iconClassName,
  visual,
}) => {
  const realButtonClassName =
    isButton && colour
      ? classNames(
          visual ? "image-button" : "button",
          getButtonColour(colour),
          className
        )
      : className;

  const inside = icon ? (
    <div className="grid grid-cols-icon-button gap-x-xs">
      <Icon type={icon} className={classNames("mt-icon", iconClassName)} />
      <div>{name || children}</div>
    </div>
  ) : visual ? (
    <AutoVisualNoLottie visual={visual} />
  ) : (
    name || children
  );

  if (internal) {
    return (
      <Link className={realButtonClassName} to={internal}>
        {inside}
      </Link>
    );
  }

  if (external) {
    if (newPage) {
      return (
        <a
          href={external}
          className={classNames(realButtonClassName, "inline-flex")}
          target="_blank"
          rel="noreferrer"
        >
          {inside}
        </a>
      );
    }
    return (
      <a
        className={classNames(realButtonClassName, "inline-flex")}
        href={external}
      >
        {inside}
      </a>
    );
  }

  if (action) {
    return (
      <button onClick={action} className={realButtonClassName}>
        {inside}
      </button>
    );
  }

  return (
    <div className={classNames(realButtonClassName, "inline-flex")}>
      {inside}
    </div>
  );
};
