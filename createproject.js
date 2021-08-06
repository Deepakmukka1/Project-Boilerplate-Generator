#!/usr/bin/env node
const fs=require('fs');
const name=process.argv[2]||'Project'

fs.mkdir(name, { recursive: true }, (err) => {
    
    if (err)
    {
        console.log("Something Went Wrong !!")
        throw err;
    } 
  });
  fs.appendFile(`${name}/app.js`,`console.log("Hello world")`,function (err){
    if (err) throw err;
  
  
  });
    fs.appendFile(`${name}/index.html`,`<!DOCTYPE html>
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
    
</body>
</html>`,function (err){
  if (err) throw err;
}
    );
 
    fs.appendFile(`${name}/style.css`,`*{
      margin:0;
      padding:0;
    }`,function (err){
      if (err) throw err;
    });
 
  console.log(`The folder ${name} is successfully created`);
