import {
  AutoVisualNoLottie,
  GenericAsset,
  getVisual,
} from "@bond-london/gatsby-graphcms-components";
import React from "react";

export type ImageAssetRendererProps = GenericAsset;
export const ImageAssetRenderer: React.FC<ImageAssetRendererProps> = (
  props
) => {
  const visual = getVisual(props);
  return <AutoVisualNoLottie visual={visual} />;
};
