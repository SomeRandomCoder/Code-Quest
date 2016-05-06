var fs = require("fs");

var mainHandlebars = fs.readFileSync("views/layouts/main.handlebars");
console.log("Test");
console.log(mainHandlebars);
