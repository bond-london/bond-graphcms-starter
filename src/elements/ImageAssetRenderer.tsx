import {
  AutoVisualNoLottie,
  getVisual,
} from "@bond-london/gatsby-graphcms-components";
import React from "react";
import { File } from "../generated/graphql-types";

export type ImageAssetRendererProps = File;
export const ImageAssetRenderer: React.FC<ImageAssetRendererProps> = (
  props
) => {
  const visual = getVisual(props);
  return <AutoVisualNoLottie visual={visual} />;
};
