const { migrate } = require("graphcms-migrate/migrate");

require("dotenv").config({
  path: `.env.migration`,
});

const endpoint = process.env.GRAPHCMS_ENDPOINT;
console.log(`Using endpoint "${endpoint}`);

migrate("graphcms-migrations", {
  endpoint,
  token: process.env.GRAPHCMS_TOKEN,
  dryRun: false,
})
  .then(() => {
    console.log("Completed migrations");
  })
  .catch((error) => console.error("Failed to complete", error));
