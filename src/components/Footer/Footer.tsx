import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { Section } from "../../layouts";
import { LinkInformation } from "../Navigation";
import { FooterColumn } from "./FooterColumn";
import { FooterRow } from "./FooterRow";

export interface FooterInformation {
  columns: FooterEntry[][];
  lastRow: FooterEntry[][];
}

export type FooterEntrySize = "Small" | "Medium" | "Large";
export function sizeToTextClassName(size: FooterEntrySize) {
  switch (size) {
    case "Small":
      return "p4";
    case "Medium":
      return "p2";
    case "Large":
      return "p1";
  }
}

export interface FooterEntry {
  type: "Logo" | "Text" | "Links";
  size: FooterEntrySize;
  text?: string;
  links?: LinkInformation[];
  separator?: string;
}

function formatEntry(entry: FooterEntry, buildYear: string, buildTime: string) {
  if (entry.text) {
    const text = entry.text
      .replaceAll("##BUILD_TIME##", buildTime)
      .replaceAll("##BUILD_YEAR##", buildYear);
    return { ...entry, text };
  }
  return entry;
}

function formatInformation(
  information: FooterInformation,
  buildYear: string,
  buildTime: string
) {
  return {
    columns: information.columns.map((c) =>
      c.map((e) => formatEntry(e, buildYear, buildTime))
    ),
    lastRow: information.lastRow.map((c) =>
      c.map((e) => formatEntry(e, buildYear, buildTime))
    ),
  };
}

export const Footer: React.FC<FooterInformation> = (information) => {
  const { siteBuildMetadata } = useStaticQuery<Queries.FooterQuery>(graphql`
    query Footer {
      siteBuildMetadata {
        buildYear: buildTime(formatString: "YYYY")
        buildTime(formatString: "dddd, MMMM d YYYY, h:mm:ss A")
      }
    }
  `);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { buildYear, buildTime } = siteBuildMetadata!;
  const { columns, lastRow } = useMemo(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => formatInformation(information, buildYear!, buildTime!),
    [information, buildYear, buildTime]
  );
  return (
    <Section
      componentName="Footer"
      element="footer"
      className="bg-blue text-white bond-row-1-m"
      contentClassName="space-y-s laptop:space-y-0"
    >
      {columns.map((column, index) => (
        <FooterColumn
          key={index}
          entries={column}
          className={classNames(
            "col-start-1 col-span-4",
            "tablet:col-span-4",
            index === 0
              ? "tablet:col-start-1"
              : "tablet:col-start-auto laptop:col-start-auto laptop:col-span-3"
          )}
        />
      ))}
      <FooterRow
        entries={lastRow}
        className={classNames(
          "col-span-full tablet:pt-s laptop:col-start-2 laptop:col-span-10"
        )}
      />
    </Section>
  );
};
