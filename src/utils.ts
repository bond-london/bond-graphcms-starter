import { useFirstVisibleCallback } from "@bond-london/gatsby-graphcms-components";

export function useFirstVisible(): [() => void, string] {
  return useFirstVisibleCallback("animation-paused", "animation-running");
}

export function arrayOrUndefined<T>(array?: T[]): T[] | undefined {
  if (array && array.length) {
    return array;
  }
}
