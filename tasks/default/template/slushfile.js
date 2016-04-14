/**
 * slush entry point
 * DO NOT TOUCH THIS FILE WHEN WORKING WITH THE GENERATOR!
 */
 const path = require("path");

//////////////////////////////////
//         load tasks          //
//////////////////////////////////

const normalizedPath = path.join(__dirname, "tasks");
require("fs")
  .readdirSync(normalizedPath)
  .forEach((file) => {
    require("./tasks/" + file);
});
