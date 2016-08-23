'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/hyphenated-string$/.test(strToSearch)); // test string w/ regexp

console.log(strToSearch.indexOf('hyphenated-string') === strToSearch.length - 'hyphenated-string'.length); // indexOf

// This is new -->
console.log(strToSearch.endsWith('hyphenated-string', 21)); // endsWith (second param is max length of searchable param
