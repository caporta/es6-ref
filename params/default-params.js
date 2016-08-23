'use strict';

function greet(name = 'Guil', timeOfDay = 'Day') {
  //name = name || 'Guil';
  //timeOfDay = timeOfDay || 'Day';

  console.log(`Good ${timeOfDay}, ${name}!`);
}

greet(undefined, 'Afternoon'); // undefined argument will utilize function's default value for that param
