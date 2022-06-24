import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import { IGatsbyImageData } from "gatsby-plugin-image";

function createGatsbyImageDataFromLocalFile(path: string): IGatsbyImageData {
  return {
    layout: "fullWidth",
    width: 100,
    height: 100,
    images: {
      fallback: { src: path },
    },
  };
}

export function createVisualAssetFromLocalFile(path: string): VisualAsset {
  return {
    image: createGatsbyImageDataFromLocalFile(path),
    alt: "Dummy",
  };
}
