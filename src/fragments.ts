import { graphql } from "gatsby";

/* @type {Fragment} */
export const imageFragment = graphql`
  fragment ImageFragment on File {
    childImageSharp {
      gatsbyImageData
    }
  }
`;

/* @type {Fragment} */
export const videoFragment = graphql`
  fragment VideoFragment on File {
    publicURL
  }
`;

/* @type {Fragment} */
export const svgFragment = graphql`
  fragment SvgFragment on File {
    svg {
      encoded
      content
    }
  }
`;

/* @type {Fragment} */
export const lottieFragment = graphql`
  fragment LottieFragment on File {
    lottie {
      animationJson
      encoded
    }
  }
`;
