let jsonData = require('../resources/data.json');

let str1 = jsonData.firstStringToCompare;
let str2 = jsonData.secondStringToCompare;

const regExp = /[a-zA-Zа-яА-Я]+([-`][a-zA-Zа-яА-Я]+)?/g;

let strArr2 = str2.toLocaleLowerCase().match(regExp);
let res = str1.toLowerCase().match(regExp).filter(el => !strArr2.includes(el));
console.log("Words of first string, different from second-string words:\n" + res);



