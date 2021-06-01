const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
cosnt generateMd = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);