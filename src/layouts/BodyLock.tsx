import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import { useEffect, useRef } from "react";

export function useBodyScrollLock(doLock: boolean) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (current && doLock) {
      disableBodyScroll(current, { reserveScrollBarGap: true });
      return () => clearAllBodyScrollLocks();
    }
  }, [doLock]);

  return { ref };
}
