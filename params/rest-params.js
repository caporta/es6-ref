'use strict';

function myFunction(name, ...params) { // rest param must come last
  console.log(name, params);
}

myFunction('Andrew', 1, 2, 3);
