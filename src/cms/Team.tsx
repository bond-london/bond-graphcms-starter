import { getVisual } from "@bond-london/gatsby-graphcms-components";
import { graphql } from "gatsby";
import React, { lazy, Suspense } from "react";
const Team = lazy(() =>
  import("../components/Team").then((m) => ({ default: m.Team }))
);

export const CMSTeam: React.FC<{ team: Queries.TeamFragment }> = ({
  team: { people },
}) => {
  const individuals = people.map(({ headshot, name, position }) => ({
    visual: getVisual(headshot),
    name,
    position,
  }));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Team team={individuals} />
    </Suspense>
  );
};

export const TeamFragment = graphql`
  fragment Team on GraphCMS_Team {
    id
    name
    people {
      ...Person
    }
  }
`;
