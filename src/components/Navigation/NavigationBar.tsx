import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React, { useCallback, useState } from "react";
import { useBodyScrollLock } from "../../layouts/BodyLock";
import { IconType } from "../Icons";
import { LinkOrButton } from "../LinkOrButton";
import { NavigationMenu } from "./NavigationMenu";

type ColourName = "Green" | "GreenWhite" | "Blue" | "BlueWhite";
export interface LinkInformation {
  icon?: IconType | null;
  internal?: string | null;
  external?: string | null;
  newPage?: boolean | null;
  name?: string | null;
  text?: string | null;
  colour?: ColourName | null;
  visual?: VisualAsset | null;
  isButton?: boolean | null;
  action?: () => void | void;
  nested?: LinkInformation[] | null;
}

export interface Menu {
  items: readonly LinkInformation[];
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
          ? "fixed top-0 left-0 z-50 h-screen max-h-navOpen"
          : "relative h-nav max-h-navClosed"
      )}
    >
      <div
        className={classNames(
          "col-span-1 col-start-2",
          "content-grid items-center",
          isOpen ? "grid-rows-nav-open" : "grid-rows-nav-closed"
        )}
      >
        <LinkOrButton
          internal="/"
          className="col-span-2 col-start-1 py-xs"
          icon="BondLogo"
          name="Home page"
          iconClassName="h-m"
        />
        <button
          aria-label="Toggle menu"
          className="relative col-span-1 col-start-4 h-xxs w-xs justify-self-end tablet:col-start-8 laptop:hidden "
          onClick={toggleMenu}
        >
          <div className="absolute block">
            <span
              className={classNames(
                "absolute block h-3 w-xs transform rounded-full bg-current text-white transition duration-500 ease-in-out",
                isOpen ? "rotate-45" : "-translate-y-xxxs"
              )}
            />
            <span
              className={classNames(
                "absolute block h-3 w-xs transform bg-current text-white transition duration-500 ease-in-out",
                isOpen && "opacity-0"
              )}
            />
            <span
              className={classNames(
                "absolute block h-3 w-xs transform bg-current text-white transition duration-500 ease-in-out",
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
