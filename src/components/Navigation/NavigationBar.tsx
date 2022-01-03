import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React, { useCallback, useState } from "react";
import { Icon, IconType, LinkOrButton } from "..";
import { useBodyScrollLock } from "../../layouts";
import { NavigationMenu } from "./NavigationMenu";

export interface LinkInformation {
  icon?: IconType;
  internal?: string;
  external?: string;
  newPage?: boolean;
}

export type NamedLinkColour = "Green" | "GreenWhite" | "Blue" | "BlueWhite";
export interface NamedLinkInformation extends LinkInformation {
  name?: string;
  colour?: NamedLinkColour;
  visual?: VisualAsset;
}

export interface MenuItem extends NamedLinkInformation {
  isButton?: boolean;
}

export interface Menu {
  items: readonly MenuItem[];
}

export const NavigationBar: React.FC<{
  menu: Menu;
  className?: string;
}> = ({ menu, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref } = useBodyScrollLock(isOpen);
  const toggleMenu = useCallback(() => {
    const nextValue = !isOpen;
    setIsOpen(nextValue);
  }, [isOpen]);

  return (
    <nav
      ref={ref}
      data-component="Navigation Bar"
      className={classNames(
        className,

        "bg-blue text-white",
        "transition-all transition-duration-1000",
        "container-grid",
        isOpen
          ? "fixed max-h-navOpen top-0 left-0 h-screen z-50"
          : "relative max-h-navClosed h-nav"
      )}
    >
      <div
        className={classNames(
          "col-start-2 col-span-1",
          "content-grid items-center",
          isOpen ? "grid-rows-nav-open" : "grid-rows-nav-closed"
        )}
      >
        <LinkOrButton internal="/" className="col-start-1 col-span-2 py-xs">
          <Icon type="BondLogo" className="h-m" />
        </LinkOrButton>
        <button
          aria-label="Toggle menu"
          className="col-start-4 col-span-1 tablet:col-start-8 justify-self-end laptop:hidden relative w-xs h-xxs "
          onClick={toggleMenu}
        >
          <div className="block absolute">
            <span
              className={classNames(
                "block absolute h-3 w-xs text-white bg-current transform transition duration-500 ease-in-out rounded-full",
                isOpen ? "rotate-45" : "-translate-y-xxxs"
              )}
            />
            <span
              className={classNames(
                "block absolute h-3 w-xs text-white bg-current transform transition duration-500 ease-in-out",
                isOpen && "opacity-0"
              )}
            />
            <span
              className={classNames(
                "block absolute h-3 w-xs text-white bg-current transform transition duration-500 ease-in-out",
                isOpen ? "-rotate-45" : "translate-y-xxxs"
              )}
            />
          </div>
        </button>
        <NavigationMenu items={menu.items} isOpen={isOpen} />
      </div>
    </nav>
  );
};
