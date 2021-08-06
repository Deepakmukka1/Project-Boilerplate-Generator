#!/usr/bin/env node
const fs = require("fs");
const chalk = require("chalk");
const name = process.argv[2] || "Project";

fs.mkdir(name, { recursive: true }, (err) => {
  if (err) {
    console.log(chalk.red("Something Went Wrong !!"));
  }
});
fs.appendFile(`${name}/app.js`, `console.log("Hello world")`, function (err) {
  if (err) console.log(chalk.red("Unable to create app.js file"));
});
fs.appendFile(
  `${name}/index.html`,
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="app.js" ></script>
    <title>Project</title>
</head>
<body>
<h2>Hello World ! </h2>  
</body>
</html>`,
  function (err) {
    if (err) console.log(chalk.red("Unable to create index.html file"));
  }
);

fs.appendFile(
  `${name}/style.css`,
  `*{
      margin:0;
      padding:0;
    }`,
  function (err) {
    console.log(chalk.red("Unable to create style.css file"));
  }
);

console.log(chalk.green(`The project ${name} is successfully created 🎉 `));
