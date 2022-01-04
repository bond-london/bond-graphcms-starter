import React from "react";
import { LinkOrButton, MenuItem } from "..";

export const FooterMenuEntry: React.FC<{
  link: MenuItem;
  withIcon?: boolean;
}> = ({
  link: { isButton, name, icon, internal, external, newPage },
  withIcon,
}) => {
  return (
    <LinkOrButton
      iconClassName="h-line-height"
      icon={withIcon ? icon || "Blank" : undefined}
      name={name}
      internal={internal}
      external={external}
      newPage={newPage}
      isButton={isButton}
    />
  );
};
