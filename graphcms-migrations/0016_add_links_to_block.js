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

const block = migration.updateModel({ apiId: "Block" });
block.addRelationalField({
  apiId: "links",
  displayName: "Links",
  description: "Links to other pages/sites",
  type: FieldType.Int,
  model: "Link",
  relationType: RelationType.ManyToMany,
  isList: true,
  reverseField: {
    isUnidirectional: true,
    apiId: "relatedLink",
    displayName: "Related link",
  },
});
