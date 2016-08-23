'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/^a-really/.test(strToSearch)); // test string w/ regexp

console.log(strToSearch.indexOf('a-really') === 0); // indexOf

// This is new -->
console.log(strToSearch.startsWith('a-really', 5)); //startsWith (second param is optional starting index)
