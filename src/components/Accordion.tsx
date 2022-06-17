import React from "react";
import { Section } from "../layouts";
import { AccordionRow, AccordionRowType } from "../elements";

export const Accordion: React.FC<{
  collection: AccordionRowType[];
}> = ({ collection }) => {
  return (
    <Section componentName="accordion">
      {collection.map((row: AccordionRowType, index: number) => (
        <div key={index}>
          {row.content ? (
            <AccordionRow content={row.content} title={row.title} />
          ) : (
            <p>No content to display...</p>
          )}
        </div>
      ))}
    </Section>
  );
};
