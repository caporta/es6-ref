'use strict';

var Person = function (data) {
  for (var key in data) {
    this[key] = data[key];
  }
  //this.getKeys = function () {
    //return Object.keys(this);
  //};
  this.getKeys = () => { // arrow functions BIND THIS TO INSTANCE NO MATTER WHERE IT'S CALLED
    return Object.keys(this);
  };
};

var alena = new Person({ name: 'Alena', role: 'Teacher' });

console.log('Alena\'s Keys:', alena.getKeys()); // this == alena

var getKeys = alena.getKeys;

console.log(getKeys()); // anon function: (this == current node process) // arrow function: (this == alena)
