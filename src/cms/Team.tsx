import { graphql } from "gatsby";
import React, { lazy, Suspense } from "react";
import { Individual } from "../components";
import { convertCMSPersonToIndividual } from "./Person";
const Team = lazy(() =>
  import("../components/Team").then((m) => ({ default: m.Team }))
);

export const CMSTeam: React.FC<{ team: Queries.TeamFragment }> = ({
  team: { people },
}) => {
  const individuals: Individual[] = people.map(convertCMSPersonToIndividual);
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
