const { newMigration, FieldType, Renderer } = require("@graphcms/management");

const migration = newMigration({
  endpoint: process.env.GRAPHCMS_ENDPOINT,
  authToken: process.env.GRAPHCMS_TOKEN,
});

const person = migration.createModel({
  apiId: "Person",
  apiIdPlural: "People",
  displayName: "Person",
});
person.addSimpleField({
  apiId: "name",
  displayName: "Name",
  type: FieldType.String,
  isRequired: true,
  isTitle: true,
});
person.addSimpleField({
  apiId: "position",
  displayName: "Position",
  type: FieldType.String,
  isRequired: true,
});
person.addRelationalField({
  apiId: "asset",
  displayName: "Asset",
  description: "Image of the person",
  type: FieldType.Int,
  model: "Asset",
  isRequired: true,
});
person.addSimpleField({
  apiId: "slug",
  displayName: "Slug",
  description: "URL friendly name",
  type: FieldType.String,
  isRequired: true,
  isUnique: true,
  formRenderer: Renderer.Slug,
  formConfig: {
    config: {
      isLowercase: true,
      shouldGenerateAutomatically: true,
      automaticSlug: "{name}",
    },
  },
  validations: {
    matches: {
      regex: "^[a-z0-9]+(?:[-_][a-z0-9]+)*$",
      errorMessage: "Invalid slug format",
    },
  },
});

module.exports = migration;
