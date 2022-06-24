import classNames from "classnames";
import React from "react";
import { LinkOrButton } from "../LinkOrButton";
import { LinkInformation } from "./NavigationBar";

export const NavigationMenu: React.FC<{
  items: readonly LinkInformation[];
  isOpen: boolean;
}> = ({ items, isOpen }) => {
  return (
    <ul
      className={classNames(
        isOpen ? "flex" : "hidden",
        "col-span-4 col-start-1 flex-col space-y-s",
        "row-span-1 row-start-3 self-start",
        "laptop:col-span-10 laptop:col-start-3 laptop:flex laptop:flex-row",
        "desktop:col-span-9 desktop:col-start-4",
        "laptop:items-center laptop:justify-end laptop:space-y-0 laptop:space-x-xxs",
        "desktop:space-x-xs",
        "laptop:row-span-1 laptop:row-start-1 laptop:self-center",
        "p3"
      )}
    >
      {items.map((item) => (
        <li key={item.name}>
          <LinkOrButton
            internal={item.internal}
            external={item.external}
            isButton={item.isButton}
            colour={item.colour}
            action={item.action}
          >
            {item.name}
          </LinkOrButton>
        </li>
      ))}
    </ul>
  );
};
