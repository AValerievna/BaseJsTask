function escapeRegExp(string) {
    const oldToken = /[.*+?^${}()|[\]\\]/g;
    const newToken = '\\$&';
    return string.replace(oldToken, newToken); // $& means the whole matched string
}

let word = "some";
const punctRegExp = /[-!"',.:;?]/g;

let punctMatch = str1.match(punctRegExp);
punctCount = punctMatch ? punctMatch.length : 0;
console.log("Number of punctuation signs: " + punctCount);

let wordMatch = str1.toLocaleLowerCase().match(new RegExp(escapeRegExp(word), 'g'));
let wordCount = wordMatch ? wordMatch.length : 0;
console.log("Number of word \"" + word + "\": " + wordCount);
