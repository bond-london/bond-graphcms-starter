import React, { useContext, useEffect, useRef } from "react";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import classNames from "classnames";
import { LayoutContext } from "./Layout";

export const Modal: React.FC<{
  containerClassName?: string;
  contentClassName?: string;
}> = ({ containerClassName, contentClassName }) => {
  const { modal } = useContext(LayoutContext);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true });
      return () => clearAllBodyScrollLocks();
    }
  }, [modal]);

  if (!modal) {
    return null;
  }

  return (
    <div
      className={classNames(
        "fixed left-0 top-0 right-0 bottom-0 z-modal flex items-center justify-center",
        containerClassName
      )}
    >
      <div className={classNames("", contentClassName)}>
        <div className="max-h-modal overflow-y-auto" ref={modalRef}>
          {modal}
        </div>
      </div>
    </div>
  );
};
