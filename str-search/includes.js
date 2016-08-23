'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/long/.test(strToSearch)); // test string w/ regexp

console.log(strToSearch.indexOf('long') > -1); // indexOf

// This is new -->
console.log(strToSearch.includes('long')); // includes
