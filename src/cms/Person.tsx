import { getVisual } from "@bond-london/gatsby-graphcms-components";
import { graphql } from "gatsby";
import React from "react";
import { Person } from "../components";

export const CMSPerson: React.FC<{
  person: Queries.PersonFragment;
  className?: string;
}> = ({ person, className }) => {
  const { headshot, name, position } = person;
  const visual = getVisual(headshot);

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
  fragment PersonLink on GraphCMS_Person {
    id
    slug
  }
`;

export const PersonFragment = graphql`
  fragment Person on GraphCMS_Person {
    ...PersonLink
    name
    position
    headshot {
      ...ImageAsset
    }
  }
`;
