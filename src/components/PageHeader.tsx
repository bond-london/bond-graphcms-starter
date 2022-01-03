import classNames from "classnames";
import React from "react";
import { Section } from "../layouts";

export const PageHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Section componentName="Page Header">
      <h1
        className={classNames(
          "h1",
          "col-start-1 col-span-4",
          "tablet:col-start-2 tablet:col-span-4",
          "laptop:col-start-3 laptop:col-span-6",
          "pt-s pb-xs laptop:pt-l laptop:pb-m"
        )}
      >
        {title}
      </h1>
    </Section>
  );
};
