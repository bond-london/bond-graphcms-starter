import React from "react";
import { Section } from "../layouts";
import { Card, CardRowType } from "../elements/CardRow";

export const Cards: React.FC<{
  collection: CardRowType[];
}> = ({ collection }) => {
  return (
    <Section componentName="Cards" className="bond-row-1-m bond-row-6-l">
      {collection.map((row: CardRowType, index: number) => {
        return <Card copy={row.copy} title={row.title} key={index} />;
      })}
    </Section>
  );
};
