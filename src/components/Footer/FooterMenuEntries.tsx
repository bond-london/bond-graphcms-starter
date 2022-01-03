import classNames from "classnames";
import React, { Fragment } from "react";
import { FooterEntrySize, sizeToTextClassName } from ".";
import { MenuItem } from "..";
import { FooterMenuEntry } from "./FooterMenuEntry";

export const FooterMenuEntries: React.FC<{
  links: MenuItem[];
  size: FooterEntrySize;
  withIcons: boolean;
  className?: string;
  separator?: string;
}> = ({ links, withIcons, className, separator, size }) => {
  return (
    <div className={classNames(className, "flex", sizeToTextClassName(size))}>
      {links.map((link, index) => (
        <Fragment key={link.name || index}>
          {separator && index > 0 && <span>&nbsp;{separator}&nbsp;</span>}
          <FooterMenuEntry link={link} withIcon={withIcons} />
        </Fragment>
      ))}
    </div>
  );
};
