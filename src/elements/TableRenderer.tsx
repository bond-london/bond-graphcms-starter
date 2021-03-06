import React, { PropsWithChildren, useMemo } from "react";
import classNames from "classnames";
import {
  buildTableInformationFromChildren,
  NodeRenderer,
  NodeRendererProps,
  RenderElements,
  TableInformation,
} from "@bond-london/graphcms-rich-text";
import { RTFContext } from "./ClassRenderer";

const RenderTable: React.FC<{
  table: TableInformation;
  renderers: NodeRenderer;
  headingClassName?: string;
  rowClassName?: string;
  className?: string;
}> = ({
  table,
  renderers,
  className,
  headingClassName = "bg-green",
  rowClassName = "even:bg-blue",
}) => {
  const tableColumns = useMemo(() => {
    const tableColumns = table.body.reduce(
      (highest, row) => Math.max(highest, row.length),
      0
    );
    return tableColumns;
  }, [table]);

  const tdClassName = classNames(
    "flex laptop:table-cell",
    "not-last:mb-xxxs not-last:laptop:mb-0",
    "laptop:py-xs",
    "laptop:not-first:pl-desktop-gap",
    "laptop:first:rounded-l-normal laptop:last:rounded-r-normal laptop:first:pl-desktop-1-gap-cols laptop:last:pr-desktop-1-gap-cols"
  );

  return (
    <table
      className={classNames(
        "border-spacing-0",
        "border-separate",
        "table-auto",
        "col-span-4 col-start-1",
        "tablet:col-span-8 tablet:col-start-1",
        "laptop:col-span-10 laptop:col-start-2",
        "w-full",
        className
      )}
    >
      <thead
        className={classNames(
          "hidden font-semibold tablet:table-header-group",
          headingClassName
        )}
      >
        <tr>
          {table.header.map((cell, index) => {
            return (
              <td
                key={index}
                className={tdClassName}
                colSpan={
                  table.header.length === tableColumns
                    ? undefined
                    : index < table.header.length - 1
                    ? undefined
                    : tableColumns - index
                }
              >
                <RenderElements
                  parentIndex={0}
                  index={index}
                  contents={cell}
                  renderers={renderers}
                />
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {table.body.map((row, index) => (
          <tr
            key={index}
            className={classNames(
              "table w-full p-xxs not-first:mt-xs laptop:mt-0 laptop:table-row",
              "rounded-normal laptop:rounded-0",
              rowClassName
            )}
          >
            {row.map((cell, index) => {
              const header = table.header[index];
              return (
                <td key={index} className={tdClassName}>
                  <div className="p4 inline-block w-1/3 pr-mobile-gap laptop:hidden">
                    {header && (
                      <RenderElements
                        parentIndex={0}
                        index={index}
                        contents={table.header[index]}
                        renderers={renderers}
                      />
                    )}
                  </div>
                  <div className="inline-block w-2/3 laptop:w-auto">
                    <RenderElements
                      parentIndex={0}
                      index={index}
                      contents={cell}
                      renderers={renderers}
                    />
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const TableRenderer: React.FC<PropsWithChildren<NodeRendererProps>> = (
  mainProps
) => {
  const { children, renderers, context } = mainProps;
  const table = useMemo(() => {
    const table = buildTableInformationFromChildren(children);
    return table;
  }, [children]);

  const isLightBlueHeading =
    (context as RTFContext)?.type === "light-blue-heading";

  const headingClassName = isLightBlueHeading ? "bg-blue" : undefined;

  const rowClassName = isLightBlueHeading ? "even:bg-white" : undefined;
  const className = isLightBlueHeading ? "not-last:mb-l" : undefined;

  return (
    <RenderTable
      table={table}
      renderers={renderers}
      headingClassName={headingClassName}
      rowClassName={rowClassName}
      className={className}
    />
  );
};
