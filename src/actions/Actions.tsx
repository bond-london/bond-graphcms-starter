import React from "react";
import { TodaysDate } from "./TodaysDate";

const lookupTable: { [key: string]: React.FC<{ className?: string }> } = {
  TODAYS_DATE: TodaysDate,
};

export const Actions: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const Action = lookupTable[name];
  if (Action) {
    return <Action className={className} />;
  }
  return <pre>Action {name} not found</pre>;
};
