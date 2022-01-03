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

const iconType = migration.createEnumeration({
  apiId: "IconType",
  displayName: "Icon Type",
  description: "Type of the icon",
});
iconType.addValue(
  "Facebook",
  "LinkedIn",
  "Location",
  "Phone",
  "Email",
  "Calendar",
  "Hamburger",
  "Blank",
  "Tick",
  "Star",
  "ArrowBack",
  "ArrowForward",
  "Arrow"
);
const link = migration.createModel({
  apiId: "Link",
  apiIdPlural: "Links",
  displayName: "Link somewhere",
});
link.addSimpleField({
  apiId: "title",
  displayName: "Title",
  description: "Link somewhere",
  type: FieldType.String,
  isTitle: true,
  isRequired: true,
});
link.addEnumerableField({
  apiId: "icon",
  displayName: "Icon",
  enumerationApiId: "IconType",
});
link.addUnionField({
  apiId: "internal",
  displayName: "Internal",
  description: "Internal page to go to",
  relationType: RelationType.ManyToMany,
  models: ["Page", "Person"],
});
link.addSimpleField({
  apiId: "external",
  displayName: "External",
  description: "External link to open",
  type: FieldType.String,
});
link.addSimpleField({
  apiId: "newPage",
  displayName: "New page",
  description: "Open in a new page",
  type: FieldType.Boolean,
});
link.addEnumerableField({
  apiId: "colour",
  displayName: "Colour",
  enumerationApiId: "ButtonColour",
});
link.addSimpleField({
  apiId: "isButton",
  displayName: "Is Button",
  description: "Is this shown as a button",
  type: FieldType.Boolean,
});
link.addRelationalField({
  apiId: "asset",
  displayName: "Asset",
  description: "Image to use for the button",
  type: FieldType.Int,
  model: "Asset",
  isRequired: false,
});
