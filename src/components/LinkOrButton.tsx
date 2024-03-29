import { AutoVisual } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import { Link } from "gatsby";
import React, { PropsWithChildren } from "react";
import { ColourName } from "../lookups";
import { Icon } from "./Icons";
import { LinkInformation } from "./Navigation/NavigationBar";

function getButtonColour(colour?: ColourName): string {
  switch (colour) {
    case "Blue":
      return "blue-button";
    case "BlueWhite":
      return "white-blue-button";
    case "GreenWhite":
      return "white-green-button";
  }
  return "green-button";
}

export const LinkOrButton: React.FC<
  PropsWithChildren<
    LinkInformation & {
      className?: string;
      iconClassName?: string;
    }
  >
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

  const label = icon || visual ? name : undefined;
  const inside = icon ? (
    <div
      className={classNames(
        "min-h-icon min-w-icon",
        children ? "grid grid-cols-icon-button gap-x-xxs" : "flex justify-start"
      )}
    >
      <Icon type={icon} className={classNames("self-center", iconClassName)} />
      {children && <div>{children}</div>}
    </div>
  ) : visual ? (
    <AutoVisual visual={visual} />
  ) : (
    name || children
  );

  if (internal) {
    return (
      <Link
        className={realButtonClassName}
        to={internal}
        aria-label={label || undefined}
      >
        {inside}
      </Link>
    );
  }

  if (external) {
    if (newPage) {
      return (
        <a
          aria-label={label || undefined}
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
        aria-label={label || undefined}
        className={classNames(realButtonClassName, "inline-flex")}
        href={external}
      >
        {inside}
      </a>
    );
  }

  if (action) {
    return (
      <button
        onClick={action}
        className={classNames(realButtonClassName, "active:font-bold")}
        aria-label={label || undefined}
      >
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
