import classNames from "classnames";
import React from "react";
import { LinkOrButton } from "..";
import { LinkInformation } from "./NavigationBar";

export const NavigationMenu: React.FC<{
  items: readonly LinkInformation[];
  isOpen: boolean;
}> = ({ items, isOpen }) => {
  return (
    <ul
      className={classNames(
        isOpen ? "flex" : "hidden",
        "col-start-1 col-span-4 flex-col space-y-s",
        "row-start-3 row-span-1 self-start",
        "laptop:flex laptop:col-start-3 laptop:col-span-10 laptop:flex-row",
        "desktop:col-start-4 desktop:col-span-9",
        "laptop:space-y-0 laptop:space-x-xxs laptop:justify-end laptop:items-center",
        "desktop:space-x-xs",
        "laptop:row-start-1 laptop:row-span-1 laptop:self-center",
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
          >
            {item.name}
          </LinkOrButton>
        </li>
      ))}
    </ul>
  );
};
