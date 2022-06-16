import { getVisual } from "@bond-london/gatsby-graphcms-components";
import { graphql } from "gatsby";
import React from "react";
import { Person } from "../components";
import { getInitials } from "../utils";

export const CMSPerson: React.FC<{
  person: Queries.PersonFragment;
  className?: string;
}> = ({ person }) => {
  return <Person personData={convertCMSPersonToIndividual(person)} />;
};

export const findSize = (size: Queries.GraphCMS_Size) => {
  switch (size) {
    case "Small":
      return "h-s w-s";
    case "Medium":
      return "h-m w-m";
    case "Large":
      return "h-l w-l";
    default:
      return undefined;
  }
};

export const convertCMSPersonToIndividual = (
  person: Queries.PersonFragment
) => {
  return {
    avatar: {
      image: getVisual(person.headshot),
      initials: getInitials(person.name),
      size: person.avatarSize ? findSize(person.avatarSize) : undefined,
    },
    name: person.name,
    position: person.position,
  };
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
    avatarSize
  }
`;
