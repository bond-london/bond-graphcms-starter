import classNames from "classnames";
import React from "react";
import { Icon } from "../components";

export const Stars: React.FC<{ stars: number; className?: string }> = ({
  stars,
  className,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const array = [...Array(stars)];

  return (
    <div className={classNames("h-xxs flex gap-x-xxxs", className)}>
      {array.map((_, index) => (
        <Icon type="Star" key={index} />
      ))}
    </div>
  );
};
