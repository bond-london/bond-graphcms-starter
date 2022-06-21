import React from "react";
import { Section } from "../layouts";

export const Heading: React.FC<{
  preHeader?: string;
  header?: string;
  postHeader?: string;
  className?: string;
}> = ({ preHeader, header, postHeader }) => {
  return (
    <Section componentName="Heading">
      {preHeader && (
        <h5 className="col-span-full text-center h3">{preHeader}</h5>
      )}
      {header && <h2 className="col-span-full text-center h2">{header}</h2>}
      {postHeader && (
        <h5 className="col-span-full text-center h3">{postHeader}</h5>
      )}
    </Section>
  );
};
