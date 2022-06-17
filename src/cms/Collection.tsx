import { getCleanedRTF } from "@bond-london/graphcms-rich-text";
import { graphql } from "gatsby";
import React from "react";
import { Accordion } from "../components";
import { AccordionRowType } from "../elements";

export const Collection: React.FC<{
  collection: Queries.NestedCollectionFragment;
}> = ({ collection }) => {
  if (!collection.collectionType) {
    return <pre>Collection not yet implemented</pre>;
  }
  switch (collection.collectionType) {
    case "accordion":
      return (
        <Accordion
          collection={collection.blocks.map(convertBlockToAccordionRow)}
        />
      );
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

function convertBlockToAccordionRow(
  block: Queries.NestedCollectionFragment["blocks"][0]
): AccordionRowType {
  switch (block.__typename) {
    case "GraphCMS_Block":
      return {
        className: "",
        contentClassName: "",
        buttonClassName: "",
        title: block.title,
        content: getCleanedRTF(block.content),
      };
  }
  throw new Error("Not a block");
}

export const NestedCollectionFragment = graphql`
  fragment NestedCollection on GraphCMS_Collection {
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
      ...ImageAsset
      ...VideoAsset
      ...LottieAsset
      ...SvgAsset
    }
    blocks {
      __typename
      ...Block
    }
  }
`;

export const CollectionFragment = graphql`
  fragment Collection on GraphCMS_Collection {
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
      ...ImageAsset
      ...VideoAsset
      ...LottieAsset
      ...SvgAsset
    }
    blocks {
      __typename
      ...Block
      ...NestedCollection
    }
  }
`;
