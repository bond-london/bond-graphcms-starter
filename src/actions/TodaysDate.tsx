import React from "react";
import { Icon } from "../components/Icons";

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
    <div className="p2 grid grid-cols-icon-button gap-x-xs">
      <Icon type="Calendar" className="h-xs text-blue" />
      <p>{date}</p>
    </div>
  );
};
