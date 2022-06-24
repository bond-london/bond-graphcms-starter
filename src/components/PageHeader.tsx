import classNames from "classnames";
import React from "react";
import { Section } from "../layouts/Section";

export const PageHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Section componentName="Page Header">
      <h1
        className={classNames(
          "h1",
          "col-span-4 col-start-1",
          "tablet:col-span-4 tablet:col-start-2",
          "laptop:col-span-6 laptop:col-start-3",
          "pt-s pb-xs laptop:pt-l laptop:pb-m"
        )}
      >
        {title}
      </h1>
    </Section>
  );
};
