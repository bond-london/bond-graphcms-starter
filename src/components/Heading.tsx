import React from "react";
import { Section } from "../layouts";

export const Heading: React.FC<{
  preHeader?: string;
  header?: string;
  postHeader?: string;
}> = ({ preHeader, header, postHeader }) => {
  return (
    <Section componentName="Heading">
      {preHeader && <h5 className="h3">{preHeader}</h5>}
      {header && <h2 className="h2">{header}</h2>}
      {postHeader && <h5 className="h3">{postHeader}</h5>}
    </Section>
  );
};
