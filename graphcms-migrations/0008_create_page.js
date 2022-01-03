const {
  newMigration,
  FieldType,
  RelationType,
  Renderer,
} = require("@graphcms/management");

const migration = newMigration({
  endpoint: process.env.GRAPHCMS_ENDPOINT,
  authToken: process.env.GRAPHCMS_TOKEN,
});
module.exports = migration;

const page = migration.createModel({
  apiId: "Page",
  apiIdPlural: "Pages",
  displayName: "Page",
});
page.addSimpleField({
  apiId: "title",
  displayName: "Title",
  description: "The title of the page",
  type: FieldType.String,
  isRequired: true,
  isTitle: true,
});
page.addSimpleField({
  apiId: "slug",
  displayName: "Slug",
  description: "URL friendly name",
  type: FieldType.String,
  formRenderer: Renderer.Slug,
  isUnique: true,
  isRequired: true,
  formConfig: {
    config: {
      isLowercase: true,
      shouldGenerateAutomatically: true,
      automaticSlug: "{title}",
    },
  },
  validations: {
    matches: {
      regex: "^[a-z0-9]+(?:[-_][a-z0-9]+)*$",
      errorMessage: "Invalid slug format",
    },
  },
});
page.addSimpleField({
  apiId: "header",
  displayName: "Header Title",
  description: "Optional header title to show on the page",
  type: FieldType.String,
});
page.addSimpleField({
  apiId: "description",
  displayName: "Description",
  type: FieldType.String,
});
page.addSimpleField({
  apiId: "keywords",
  displayName: "Keywords",
  type: FieldType.String,
});
page.addRelationalField({
  apiId: "image",
  displayName: "Image",
  description: "Default image to show for the page",
  type: FieldType.Int,
  model: "Asset",
});
page.addUnionField({
  apiId: "blocks",
  displayName: "Blocks",
  description: "Content blocks on the page",
  relationType: RelationType.ManyToMany,
  models: ["Block", "Person", "Team", "Collection"],
  isList: true,
});
