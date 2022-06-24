import React from "react";
import { Section } from "../layouts/Section";

export const Heading: React.FC<{
  preHeader?: string;
  header?: string;
  postHeader?: string;
  className?: string;
}> = ({ preHeader, header, postHeader }) => {
  return (
    <Section componentName="Heading">
      {preHeader && (
        <h5 className="h3 col-span-full text-center">{preHeader}</h5>
      )}
      {header && <h2 className="h2 col-span-full text-center">{header}</h2>}
      {postHeader && (
        <h5 className="h3 col-span-full text-center">{postHeader}</h5>
      )}
    </Section>
  );
};
