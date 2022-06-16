import { useFirstVisibleCallback } from "@bond-london/gatsby-graphcms-components";

export function useFirstVisible(): [() => void, string] {
  return useFirstVisibleCallback("animation-paused", "animation-running");
}

export function arrayOrUndefined<T>(array?: T[]): T[] | undefined {
  if (array && array.length) {
    return array;
  }
}

export function getInitials(name?: string): string {
  if (name) {
    const initialArray: Array<string> = [];
    const fullName = name.split(" ");
    fullName.forEach((name) => initialArray.push(name.charAt(0).toUpperCase()));
    return initialArray.join("");
  }
  return "?";
}
