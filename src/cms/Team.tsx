import { getVisual } from "@bond-london/gatsby-graphcms-components";
import { graphql } from "gatsby";
import React from "react";
import { Team } from "../components";
import { GraphCms_Team } from "../generated/graphql-types";

export const CMSTeam: React.FC<{ team: GraphCms_Team }> = ({
  team: { people },
}) => {
  const individuals = people.map(({ asset, name, position }) => ({
    visual: getVisual(asset),
    name,
    position,
  }));
  return <Team team={individuals} />;
};

export const TeamFragment = graphql`
  fragment TeamFragment on GraphCMS_Team {
    id
    name
    people {
      ...PersonFragment
    }
  }
`;
