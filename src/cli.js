#!/usr/bin/env node

const path = require("path");
const { analyzeProject } = require("./analyzer");
const { formatProject } = require("./formatter");

const targetPath = process.argv[2];

if (!targetPath) {
  console.log("❌ Please provide a project path");
  console.log("Usage: node src/cli.js <path>");
  process.exit(1);
}

const fullPath = path.resolve(targetPath);

console.log("🚀 Copoads is running...\n");

(async () => {
  await analyzeProject(fullPath);
  await formatProject(fullPath);
})();
