import { RenderBodyArgs } from "gatsby";

// eslint-disable-next-line import/no-unused-modules
export function onRenderBody({
  setHtmlAttributes,
  setBodyAttributes,
}: RenderBodyArgs) {
  setHtmlAttributes({ lang: "en" });
  if (process.env.GATSBY_DEBUG_TAILWIND) {
    setBodyAttributes({ className: "debug-screens" });
  }
}
