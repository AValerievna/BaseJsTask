let jsonData = require('../resources/data.json');

const punctRegExp = /[-!"',.:;?]/g;

let str = jsonData.stringToFindWord;
let word = jsonData.necessaryWord;

let punctMatch = str.match(punctRegExp);
let punctCount = punctMatch ? punctMatch.length : 0;
console.log("Number of punctuation signs: " + punctCount);

let wordMatch = str.toLocaleLowerCase().match(new RegExp(escapeRegExp(word), 'g'));
let wordCount = wordMatch ? wordMatch.length : 0;
console.log("Number of word \"" + word + "\": " + wordCount);

function escapeRegExp(string) {
    const oldToken = /[.*+?^${}()|[\]\\]/g;
    const newToken = '\\$&';
    return string.replace(oldToken, newToken); // $& means the whole matched string
}

