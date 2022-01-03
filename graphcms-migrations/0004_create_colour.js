const {
  newMigration,
  FieldType,
  RelationType,
} = require("@graphcms/management");

const migration = newMigration({
  endpoint: process.env.GRAPHCMS_ENDPOINT,
  authToken: process.env.GRAPHCMS_TOKEN,
});

const colour = migration.createEnumeration({
  apiId: "Colour",
  displayName: "Colour",
});
colour.addValue("Black", "Grey", "White", "Green", "Blue", "Red", "Error");

const buttonColour = migration.createEnumeration({
  apiId: "ButtonColour",
  displayName: "Button colour",
});
buttonColour.addValue("Green", "GreenWhite", "Blue", "BlueWhite");

const backgroundColour = migration.createEnumeration({
  apiId: "BackgroundColour",
  displayName: "Background colour",
});
backgroundColour.addValue("Black", "White", "Grey");

module.exports = migration;
