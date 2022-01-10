import { graphql } from "gatsby";
import React from "react";
import { GraphCms_Collection } from "../generated/graphql-types";

// const InsightsCollection: React.FC<{ collection: GraphCms_Collection }> = ({
//   collection,
// }) => {
//   const insights = useMemo(() => {
//     const insights = collection.blocks.map((block) => {
//       switch (block.__typename) {
//         case "GraphCMS_Block": {
//           const asset = getVisual(block.asset, block.loop, block.preview);
//           const description = tryGetRTF(block.content, true);
//           if (block.links && asset && description) {
//             return {
//               asset: asset,
//               name: block.title,
//               description,
//               links: arrayOrUndefined(block.links?.map(buildNamedLink)),
//             };
//           }
//         }
//       }
//       return undefined;
//     });
//     return insights.filter((x) => x) as InsightProp[];
//   }, [collection.blocks]);

//   return <Insights insights={insights} />;
// };

// const ProductInsightsCollection: React.FC<{
//   collection: GraphCms_Collection;
// }> = ({ collection }) => {
//   const insights = useMemo(() => {
//     const insights = collection.blocks.map((block) => {
//       switch (block.__typename) {
//         case "GraphCMS_Block": {
//           const visual = getVisual(block.asset, block.loop, block.preview);
//           const detail = tryGetRTF(block.content, true);
//           if (detail) {
//             return {
//               visual,
//               feature: block.title,
//               detail,
//             };
//           }
//         }
//       }
//       return undefined;
//     });
//     return insights.filter((x) => x) as ProductInsightProps[];
//   }, [collection.blocks]);

//   return <ProductInsights insights={insights} />;
// };

// const TestimonialCollections: React.FC<{ collection: GraphCms_Collection }> = ({
//   collection,
// }) => {
//   const testimonials = useMemo(() => {
//     const testimonials = collection.blocks.map((block) => {
//       switch (block.__typename) {
//         case "GraphCMS_Block": {
//           const review = tryGetRTF(block.content, true);
//           if (review) {
//             return {
//               stars: 5,
//               from: block.title,
//               review,
//             };
//           }
//         }
//       }
//       return undefined;
//     });
//     return testimonials.filter((x) => x) as TestimonialProps[];
//   }, [collection.blocks]);

//   const visual = getVisual(collection.asset);
//   if (!visual) {
//     return null;
//   }
//   return (
//     <Testimonials
//       visual={visual}
//       title={collection.title}
//       heading={tryGetRTF(collection.content, true)}
//       testimonials={testimonials}
//     />
//   );
// };

// const Servicing: React.FC<{ collection: GraphCms_Collection }> = ({
//   collection,
// }) => {
//   const details = useMemo(() => {
//     const details = collection.blocks.map((block) => {
//       switch (block.__typename) {
//         case "GraphCMS_Block": {
//           const title = block.showTitle ? block.title : undefined;
//           const content = tryGetRTF(block.content, true);
//           return { title, content };
//         }
//       }
//       return undefined;
//     });
//     return details.filter((x) => x) as ServicingCollectionDetail[];
//   }, [collection.blocks]);

//   const visual = getVisual(collection.asset);
//   if (!visual) {
//     return <pre>No asset</pre>;
//   }

//   return (
//     <ServicingCollection
//       content={tryGetRTF(collection.content, true)}
//       visual={visual}
//       details={details}
//     />
//   );
// };

export const Collection: React.FC<{
  collection: GraphCms_Collection;
}> = ({ collection }) => {
  if (!collection.collectionType) {
    return <pre>Collection not yet implemented</pre>;
  }
  switch (collection.collectionType) {
    // case "insights":
    //   return <InsightsCollection collection={collection} />;
    // case "productInsights":
    //   return <ProductInsightsCollection collection={collection} />;
    // case "testimonials":
    //   return <TestimonialCollections collection={collection} />;
    // case "servicing":
    //   return <Servicing collection={collection} />;
    default:
      return (
        <pre>Collection {collection.collectionType} not yet implemented</pre>
      );
  }
};

export const NestedCollectionFragment = graphql`
  fragment NestedCollectionFragment on GraphCMS_Collection {
    id
    title
    collectionType
    content {
      cleaned
      references {
        ... on GraphCMS_Asset {
          id: remoteId
          mimeType
        }
      }
    }
    asset {
      ...ImageAssetFragment
      ...VideoAssetFragment
      ...LottieAssetFragment
      ...SvgAssetFragment
    }
    blocks {
      __typename
      ...BlockFragment
    }
  }
`;

export const CollectionFragment = graphql`
  fragment CollectionFragment on GraphCMS_Collection {
    id
    title
    collectionType
    content {
      cleaned
      references {
        ... on GraphCMS_Asset {
          id: remoteId
          mimeType
        }
      }
    }
    asset {
      ...ImageAssetFragment
      ...VideoAssetFragment
      ...LottieAssetFragment
      ...SvgAssetFragment
    }
    blocks {
      __typename
      ...BlockFragment
      ...NestedCollectionFragment
    }
  }
`;
