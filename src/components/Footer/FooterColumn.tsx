import classNames from "classnames";
import React from "react";
import { FooterEntry, sizeToTextClassName } from ".";
import { Icon } from "..";
import { FooterMenuEntries } from "./FooterMenuEntries";

export const FooterColumn: React.FC<{
  entries: FooterEntry[];
  className?: string;
}> = ({ entries, className }) => {
  return (
    <div className={classNames(className, "space-y-xs")}>
      {entries.map((entry, index) => {
        switch (entry.type) {
          case "Logo":
            return <Icon type="BondLogo" key={index} className="h-m" />;
          case "Text":
            return (
              <p
                key={index}
                className={classNames(
                  "flex items-center",
                  sizeToTextClassName(entry.size)
                )}
              >
                {entry.text}
              </p>
            );
          case "Links": {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const links = entry.links!;
            const hasIcon = !!links.find((l) => !!l.icon);
            return (
              <FooterMenuEntries
                size={entry.size}
                separator={entry.separator}
                key={index}
                links={links}
                withIcons={hasIcon}
              />
            );
          }
        }
      })}
    </div>
  );
};
