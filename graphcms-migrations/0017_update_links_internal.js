const {
  newMigration,
  FieldType,
  RelationType,
} = require("@graphcms/management");

const migration = newMigration({
  endpoint: process.env.GRAPHCMS_ENDPOINT,
  authToken: process.env.GRAPHCMS_TOKEN,
});
module.exports = migration;

const link = migration.updateModel({ apiId: "Link" });

link.addUnionField({
  apiId: "internalLink",
  displayName: "Internal",
  description: "Internal page to go to",
  relationType: RelationType.ManyToOne,
  models: ["Page", "Person"],
  reverseField: {
    apiId: "relatedLink",
    displayName: "Related link",
    visibility: "HIDDEN",
  },
});
