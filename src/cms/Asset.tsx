import { graphql } from "gatsby";

export const SeoImageAssetFragment = graphql`
  fragment SeoImageAsset on GraphCMS_Asset {
    id
    alt
    localFile {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 1200, height: 630)
      }
    }
  }
`;
export const ImageAssetFragment = graphql`
  fragment ImageAsset on GraphCMS_Asset {
    id
    alt
    dontCrop
    horizontalCropPosition
    verticalCropPosition
    remoteId
    localFile {
      ...ImageFile
    }
  }
`;

export const SvgAssetFragment = graphql`
  fragment SvgAsset on GraphCMS_Asset {
    id
    remoteId
    localFile {
      ...SvgFile
    }
  }
`;

export const VideoAssetFragment = graphql`
  fragment VideoAsset on GraphCMS_Asset {
    id
    remoteId
    localFile {
      ...VideoFile
    }
  }
`;

export const LottieAssetFragment = graphql`
  fragment LottieAsset on GraphCMS_Asset {
    id
    remoteId
    localFile {
      ...LottieFile
    }
  }
`;
