import { graphql } from "gatsby";

export const SeoImageAssetFragment = graphql`
  fragment SeoImageAssetFragment on GraphCMS_Asset {
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
  fragment ImageAssetFragment on GraphCMS_Asset {
    id
    alt
    localFile {
      ...ImageFragment
    }
  }
`;

export const SvgAssetFragment = graphql`
  fragment SvgAssetFragment on GraphCMS_Asset {
    id
    localFile {
      ...SvgFragment
    }
  }
`;

export const VideoAssetFragment = graphql`
  fragment VideoAssetFragment on GraphCMS_Asset {
    id
    localFile {
      ...VideoFragment
    }
  }
`;

export const LottieAssetFragment = graphql`
  fragment LottieAssetFragment on GraphCMS_Asset {
    id
    localFile {
      ...LottieFragment
    }
  }
`;
