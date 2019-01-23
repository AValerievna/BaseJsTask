let jsonData = require('../resources/data.json');

let str1 = jsonData.firstStringToCompare;
let str2 = jsonData.secondStringToCompare;

const wordRegExp = /\b[a-zA-Zа-яА-Я]+(\d+)?([-`][a-zA-Zа-яА-Я]+(\d+))?\b/;

let strArr2 = str2.toLocaleLowerCase().match(wordRegExp);
let res = str1.toLowerCase().match(wordRegExp).filter(el => !strArr2.includes(el));
console.log(`Words of first string, different from second-string words:\n${res}`);



