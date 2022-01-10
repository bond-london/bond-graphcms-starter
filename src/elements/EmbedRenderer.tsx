import {
  AutoVisualNoLottie,
  getVisual,
} from "@bond-london/gatsby-graphcms-components";
import { EmbedNodeRendererProps } from "@bond-london/graphcms-rich-text";
import React from "react";

export const EmbedRenderer: React.FC<EmbedNodeRendererProps> = (props) => {
  const { nodeId, nodeType, ...rest } = props;
  const { references } = rest;

  if (nodeType !== "Asset") {
    throw new Error(`Render asset can only render assets, not ${nodeType}`);
  }

  const referenceValue = references?.filter(
    (ref) => ref.id === nodeId || ref.remoteId === nodeId
  )[0];
  if (!referenceValue?.id) {
    return (
      <span style={{ color: "red" }}>
        {`[EmbedRenderer]: No id found for embed node: ${nodeId}`}
      </span>
    );
  }
  const visual = getVisual(referenceValue);
  if (!visual) {
    return (
      <span style={{ color: "red" }}>
        {`[RenderAsset]: No image found for asset: ${nodeId}`}
      </span>
    );
  }

  return <AutoVisualNoLottie visual={visual} />;
};
