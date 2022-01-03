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
      iconClassName="text-blue"
      icon={withIcon ? icon || "Blank" : undefined}
      name={name}
      internal={internal}
      external={external}
      newPage={newPage}
      isButton={isButton}
    />
  );
};
