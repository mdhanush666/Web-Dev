
/*

  ES6 Module =    An external file that contains reusable code
                  that can be imported into other JavaScript files
                  Can contain variables, classes, functions ...
                  and more
                  Introduced as part of ECMAScript 2e15 update

*/

import {PI,getArea} from "./mathUtil.js";

console.log({PI});

console.log(`${getArea(7).toFixed(2)} cm`);