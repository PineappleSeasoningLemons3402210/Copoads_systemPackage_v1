const glob = require("glob");
const fs = require("fs");
const prettier = require("prettier");
const chalk = require("chalk");

async function formatProject(projectPath) {
  console.log(chalk.blue("🧹 Formatting files...\n"));

  const files = glob.sync(`${projectPath}/**/*.{html,css,js}`);

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, "utf-8");

      const formatted = await prettier.format(content, {
        parser: getParser(file),
      });

      fs.writeFileSync(file, formatted);
      console.log(chalk.gray(`Formatted: ${file}`));
    } catch (err) {
      console.log(chalk.red(`Error formatting ${file}`));
    }
  }

  console.log(chalk.green("\n✅ Formatting complete\n"));
}

function getParser(file) {
  if (file.endsWith(".html")) return "html";
  if (file.endsWith(".css")) return "css";
  return "babel"; // for JS
}

module.exports = { formatProject };
