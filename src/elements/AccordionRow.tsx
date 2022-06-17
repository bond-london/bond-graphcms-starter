import { CleanedRTF } from "@bond-london/graphcms-rich-text";
import classNames from "classnames";
import React, { useCallback, useRef, useState } from "react";
import { RTF } from ".";
import { Icon } from "../components/Icons";

interface State {
  active: boolean;
  height: string;
  rotate: string;
}

export interface AccordionRowType {
  className?: string;
  content?: CleanedRTF;
  title: string;
  contentClassName?: string;
  buttonClassName?: string;
}

export const AccordionRow: React.FC<{
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
  title: string;
  content: CleanedRTF;
}> = ({ className, buttonClassName, contentClassName, title, content }) => {
  const [state, setState] = useState<State>({
    active: false,
    height: "0px",
    rotate: "",
  });
  const contentRef = useRef<HTMLDivElement>(null);
  const toggleAccordion = useCallback(() => {
    setState((state) => {
      if (!contentRef.current) return state;
      const { active } = state;
      return {
        active: !active,
        height: active ? "0px" : `${contentRef.current.scrollHeight}px`,
        rotate: active ? "" : "rotate-180",
      };
    });
  }, [contentRef]);

  const { height, rotate, active } = state;
  return (
    <div className={classNames("flex flex-col", className)}>
      <button
        className={classNames(
          "appearance-none cursor-pointer flex items-center justify-between",
          buttonClassName
        )}
        onClick={toggleAccordion}
      >
        {title}
        <Icon
          type="ArrowBack"
          className={classNames("transform duration-700 ease", rotate)}
        />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className={classNames(
          "overflow-auto transition-max-height duration-700 ease-in-out",
          active && contentClassName
        )}
      >
        <RTF content={content} />
      </div>
    </div>
  );
};
