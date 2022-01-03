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

const collectionType = migration.createEnumeration({
  apiId: "CollectionType",
  displayName: "Collection Type",
  description: "Type of the collection",
  values: [
    {
      apiId: "insights",
      displayName: "Insights",
    },
    {
      apiId: "productInsights",
      displayName: "Product Insights",
    },
    {
      apiId: "testimonials",
      displayName: "Testimonials",
    },
  ],
});

const collection = migration.createModel({
  apiId: "Collection",
  apiIdPlural: "Collections",
  displayName: "Collection of blocks",
});
collection.addSimpleField({
  apiId: "title",
  displayName: "Title",
  description: "The title of the collection",
  type: FieldType.String,
  isRequired: true,
  isTitle: true,
});
collection.addSimpleField({
  apiId: "showTitle",
  displayName: "Show title",
  description: "Show the title in the content",
  type: FieldType.Boolean,
});
collection.addSimpleField({
  apiId: "name",
  displayName: "Name",
  description: "Optional name to help in the CMS",
  type: FieldType.String,
  isTitle: true,
});
collection.addUnionField({
  apiId: "blocks",
  displayName: "Blocks",
  description: "Blocks on the collection",
  relationType: RelationType.ManyToMany,
  models: ["Block", "Person", "Team", "Collection"],
  isList: true,
  reverseField: {
    apiId: "relatedCollection",
    displayName: "Related collection",
  },
});
collection.addSimpleField({
  apiId: "content",
  displayName: "Content",
  description: "Optional content",
  type: FieldType.Richtext,
  embedsEnabled: true,
  embeddableModels: ["Asset"],
});
collection.addRelationalField({
  apiId: "asset",
  displayName: "Asset",
  description: "Asset for the collection",
  type: FieldType.Int,
  model: "Asset",
});
collection.addEnumerableField({
  apiId: "collectionType",
  displayName: "Collection type",
  description: "Type of specialised collection",
  enumerationApiId: "CollectionType",
});
