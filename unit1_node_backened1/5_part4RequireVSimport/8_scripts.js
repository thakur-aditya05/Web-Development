// either  we only export-import or only export-require
// -------------
// learn import and export 
import { add, sub } from "./math.js"; // import the functions from math.js
console.log(add(2, 3)); // 5
// >> backened1/5_part4RequireVSimport/node 8_scripts.js
// but this will not work --> to make it work we have to use ''' "type": "module" ''' in package.json file
// >> backened1/5_part4RequireVSimport/node npm init -y (to install package.json file)
// >> backened1/5_part4RequireVSimport/node 8_scripts.js   now this will work
// ------------------------------












