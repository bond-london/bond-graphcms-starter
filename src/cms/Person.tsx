import { getVisual } from "@bond-london/gatsby-graphcms-components";
import { graphql } from "gatsby";
import React from "react";
import { Person } from "../components";
import { GraphCms_Person } from "../generated/graphql-types";

export const CMSPerson: React.FC<{
  person: GraphCms_Person;
  className?: string;
}> = ({ person, className }) => {
  const { asset, name, position } = person;
  const visual = getVisual(asset);

  return (
    <Person
      visual={visual}
      name={name}
      position={position}
      className={className}
    />
  );
};
export const PersonLinkFragment = graphql`
  fragment PersonLinkFragment on GraphCMS_Person {
    id
    slug
  }
`;

export const PersonFragment = graphql`
  fragment PersonFragment on GraphCMS_Person {
    ...PersonLinkFragment
    name
    position
    asset {
      ...ImageAssetFragment
    }
  }
`;
