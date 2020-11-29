const fs = require("fs");
const path = require("path");

const core = require("@actions/core");
const github = require("@actions/github");

// Another Package I've wrote
// https://github.com/du5rte/secrets
const secrets = require("secrets");

try {
  const raw = core.getInput("secrets");
  const filename = core.getInput("file");
  const pathname = core.getInput("path");
  const mode = core.getInput("mode");

  const parsed = secrets.parse(raw.trim());

  if (parsed.length === 0) {
    throw new Error("No secrets received");
  }

  core.setOutput("parsed", parsed);

  const fullpath = path.resolve(__dirname, pathname, filename);

  console.log("Secrets parsed");

  core.setOutput("location", fullpath);

  const generated = secrets.format(parsed, mode);

  fs.writeFileSync(fullpath, generated);

  console.log("Secrets file created");

  console.log("Verifying...");

  const found = secrets.search();

  const sanatized = secrets.sanatize(found);

  core.setOutput("sanatized", sanatized);

  core.setOutput("success", true);
} catch (error) {
  core.setFailed(error.message);
}
