let str1 = jsonData.FirstString;
let str2 = jsonData.SecondString;

const regExp = /[a-zA-Zа-яА-Я]+([-`][a-zA-Zа-яА-Я]+)?/g;

let strArr2 = str2.toLocaleLowerCase().match(regExp);
let res = str1.toLowerCase().match(regExp).filter(el => !strArr2.includes(el));
console.log(strArr2);
console.log(res);



