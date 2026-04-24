const glob = require("glob");
const fs = require("fs");
const chalk = require("chalk");

function analyzeProject(projectPath) {
  return new Promise((resolve) => {
    glob(`${projectPath}/**/*.{html,css,js}`, (err, files) => {
      if (err) {
        console.error("Error scanning files:", err);
        return resolve();
      }

      console.log(chalk.blue("🔍 Analyzing files...\n"));

      files.forEach((file) => {
        const content = fs.readFileSync(file, "utf-8");

        if (content.includes("console.log")) {
          console.log(
            chalk.yellow(`⚠️ Found console.log in: ${file}`)
          );
        }

        if (content.includes("!important")) {
          console.log(
            chalk.yellow(`⚠️ Avoid !important in: ${file}`)
          );
        }
      });

      console.log(chalk.green("\n✅ Analysis complete\n"));
      resolve();
    });
  });
}

module.exports = { analyzeProject };
