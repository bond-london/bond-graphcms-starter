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

const blockType = migration.createEnumeration({
  apiId: "BlockType",
  displayName: "Block Type",
  description: "Type of the content block",
  values: [
    {
      apiId: "hero",
      displayName: "Hero",
    },
    { apiId: "message", displayName: "Message" },
    {
      apiId: "cta",
      displayName: "Call to action",
    },
    {
      apiId: "information",
      displayName: "Information",
    },
    { apiId: "product", displayName: "Product" },
    { apiId: "collectionContent", displayName: "Content for a collection" },
    { apiId: "richtext", displayName: "Rich text content" },
  ],
});

const block = migration.createModel({
  apiId: "Block",
  apiIdPlural: "Blocks",
  displayName: "Content block",
});
block.addSimpleField({
  apiId: "title",
  displayName: "Title",
  type: FieldType.String,
  isRequired: true,
  isTitle: true,
});
block.addSimpleField({
  apiId: "name",
  displayName: "Name",
  description: "Optional name to help in the CMS",
  type: FieldType.String,
  isTitle: true,
});
block.addSimpleField({
  apiId: "showTitle",
  displayName: "Show title",
  description: "Show the title in the content",
  type: FieldType.Boolean,
});
block.addEnumerableField({
  apiId: "type",
  displayName: "Type",
  description: "Type of the block",
  enumerationApiId: "BlockType",
  isRequired: true,
});
block.addSimpleField({
  apiId: "content",
  displayName: "Content",
  description: "Main content text",
  type: FieldType.Richtext,
  embedsEnabled: true,
  embeddableModels: ["Asset"],
});
block.addRelationalField({
  apiId: "asset",
  displayName: "Asset",
  description: "Asset for the block",
  type: FieldType.Int,
  model: "Asset",
});
block.addSimpleField({
  apiId: "loop",
  displayName: "Loop asset",
  description: "Loop the asset if a video or animation",
  type: FieldType.Boolean,
});
block.addRelationalField({
  apiId: "preview",
  displayName: "Preview image",
  description: "Preview image for the asset",
  type: FieldType.Int,
  model: "Asset",
  reverseField: {
    apiId: "previewBlock",
    displayName: "Preview Block",
  },
});
block.addSimpleField({
  apiId: "left",
  displayName: "Asset left",
  description: "Show the asset to the left",
  type: FieldType.Boolean,
});
block.addEnumerableField({
  apiId: "backgroundColour",
  displayName: "Background Colour",
  enumerationApiId: "BackgroundColour",
});
block.addEnumerableField({
  apiId: "textColour",
  displayName: "Text Colour",
  enumerationApiId: "Colour",
});
