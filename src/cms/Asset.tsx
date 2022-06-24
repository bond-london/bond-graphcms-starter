import { graphql } from "gatsby";

// eslint-disable-next-line import/no-unused-modules
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

// eslint-disable-next-line import/no-unused-modules
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

// eslint-disable-next-line import/no-unused-modules
export const SvgAssetFragment = graphql`
  fragment SvgAsset on GraphCMS_Asset {
    id
    remoteId
    localFile {
      ...SvgFile
    }
  }
`;

// eslint-disable-next-line import/no-unused-modules
export const VideoAssetFragment = graphql`
  fragment VideoAsset on GraphCMS_Asset {
    id
    remoteId
    localFile {
      ...VideoFile
    }
  }
`;

// eslint-disable-next-line import/no-unused-modules
export const LottieAssetFragment = graphql`
  fragment LottieAsset on GraphCMS_Asset {
    id
    remoteId
    localFile {
      ...LottieFile
    }
  }
`;
