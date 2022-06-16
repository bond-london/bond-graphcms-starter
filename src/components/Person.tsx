import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { Avatar } from "../elements";

export interface Individual {
  avatar: {
    image: VisualAsset | undefined;
    initials: string;
    size?: string;
  };
  name: string;
  position: string;
  className?: string;
}

export const Person: React.FC<{ personData: Individual }> = ({
  personData: { avatar, name, position, className },
}) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-1 grid-rows-2 relative text-center",
        className
      )}
    >
      <Avatar
        visual={avatar.image}
        initials={avatar.initials}
        size={avatar.size}
      />
      <div className="row-start-3 row-span-1">
        <h3 className="h3 pt-s">{name}</h3>
        <p className="p3 pt-xxs">{position}</p>
      </div>
    </div>
  );
};
