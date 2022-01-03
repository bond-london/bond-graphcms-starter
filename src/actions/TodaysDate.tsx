import React from "react";
import { Icon } from "../components";

function formatDate(date: Date): string {
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const TodaysDate: React.FC = () => {
  const date = formatDate(new Date());
  return (
    <div className="grid grid-cols-icon-button gap-x-xs p2">
      <Icon type="Calendar" className="text-blue h-xs" />
      <p>{date}</p>
    </div>
  );
};
