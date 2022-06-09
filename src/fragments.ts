import { graphql } from "gatsby";

/* @type {Fragment} */
export const imageFragment = graphql`
  fragment ImageFile on File {
    childImageSharp {
      gatsbyImageData
    }
  }
`;

/* @type {Fragment} */
export const videoFragment = graphql`
  fragment VideoFile on File {
    publicURL
  }
`;

/* @type {Fragment} */
export const svgFragment = graphql`
  fragment SvgFile on File {
    svg {
      encoded
      content
    }
  }
`;

/* @type {Fragment} */
export const lottieFragment = graphql`
  fragment LottieFile on File {
    publicURL
    lottie {
      encoded
    }
  }
`;
