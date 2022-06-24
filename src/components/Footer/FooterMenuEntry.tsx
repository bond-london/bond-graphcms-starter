import React from "react";
import { LinkOrButton } from "../LinkOrButton";
import { LinkInformation } from "../Navigation/NavigationBar";

export const FooterMenuEntry: React.FC<{
  link: LinkInformation;
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
