const {
  newMigration,
  FieldType,
  Renderer,
  RelationType,
} = require("@graphcms/management");

const migration = newMigration({
  endpoint: process.env.GRAPHCMS_ENDPOINT,
  authToken: process.env.GRAPHCMS_TOKEN,
});

const team = migration.createModel({
  apiId: "Team",
  apiIdPlural: "Teams",
  displayName: "Team",
});
team.addSimpleField({
  apiId: "name",
  displayName: "Name",
  description: "The name of the team",
  type: FieldType.String,
  isRequired: true,
  isTitle: true,
});
team.addRelationalField({
  apiId: "people",
  displayName: "People",
  description: "People in the team",
  type: FieldType.Int,
  model: "Person",
  isRequired: true,
  relationType: RelationType.OneToMany,
  reverseField: {
    isUnidirectional: true,
    apiId: "relatedTeam",
    displayName: "Related team",
  },
});

module.exports = migration;
