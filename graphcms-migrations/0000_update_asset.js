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

const asset = migration.updateModel({ apiId: "Asset" });
asset.addSimpleField({
  apiId: "alt",
  displayName: "Alt text",
  description: "Alt text for accessibility",
  type: FieldType.String,
});
