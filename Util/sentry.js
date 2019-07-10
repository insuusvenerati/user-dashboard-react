require("dotenv").config();
const path = require("path");
const spawn = require("child_process").spawn;
const isWin = process.platform === "win32";
const ext = isWin ? ".cmd" : "";

const run = (cmd, args, writeToStdout = true) => {
  return new Promise((resolve, reject) => {
    const command = spawn(cmd, args);
    let result = "";
    command.stdout.on("data", data => {
      result += data;
      if (writeToStdout) process.stdout.write(`${data}`);
    });
    command.stderr.on("data", data => {
      process.stderr.write(`${data}`);
    });
    command.on("close", _ => {
      resolve(result.replace(/(\n|\r)+$/, ""));
    });
    command.on("error", err => {
      reject(err);
    });
  });
};

async function main() {
  // propose version
  let version = "";
  try {
    console.log("Proposing Version");
    version = await run(
      path.resolve("./node_modules/.bin/sentry-cli" + ext),
      ["releases", "propose-version"],
      false
    );
    console.log("Version Proposed: ", version);
  } catch (err) {
    console.error("Failed proposing version", err);
  }

  // Create release
  try {
    console.log("Creating Sentry Release");
    await run(path.resolve("./node_modules/.bin/sentry-cli" + ext), [
      "releases",
      "new",
      "-p",
      process.env.SENTRY_PROJ,
      version
    ]);
  } catch (err) {
    console.error("Failed Creating Sentry Release", err);
  }

  // Associate commits
  try {
    console.log("Associating Commits");
    await run(path.resolve("./node_modules/.bin/sentry-cli" + ext), [
      "releases",
      "set-commits",
      "--auto",
      version
    ]);
    console.log("Commits Associated");
  } catch (err) {
    console.error("Failed Associating Commits", err);
  }
}

main();
