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
block.addEnumerableField({
  apiId: "textColour",
  displayName: "Text Colour",
  enumerationApiId: "Colour",
});
