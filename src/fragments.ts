import { graphql } from "gatsby";

/* @type {Fragment} */
// eslint-disable-next-line import/no-unused-modules
export const imageFragment = graphql`
  fragment ImageFile on File {
    childImageSharp {
      gatsbyImageData
    }
  }
`;

/* @type {Fragment} */
// eslint-disable-next-line import/no-unused-modules
export const videoFragment = graphql`
  fragment VideoFile on File {
    publicURL
  }
`;

/* @type {Fragment} */
// eslint-disable-next-line import/no-unused-modules
export const svgFragment = graphql`
  fragment SvgFile on File {
    svg {
      encoded
      content
    }
  }
`;

/* @type {Fragment} */
// eslint-disable-next-line import/no-unused-modules
export const lottieFragment = graphql`
  fragment LottieFile on File {
    publicURL
    childExtractedLottie {
      width
      height
      encoded
      encodedFile {
        publicURL
      }
    }
  }
`;
