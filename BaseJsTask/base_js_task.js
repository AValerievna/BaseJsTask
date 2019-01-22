//1
let str1 = "Some This7 very/ important. some some str.i,ng5 c!reate suspense some";
let str2 = "Some important`rt string ";

let str2_arr = str2.toLocaleLowerCase().match(/[a-zA-Zа-яА-Я]+([-`][a-zA-Zа-яА-Я]+)?/g);
let res = str1.toLowerCase().match(/[a-zA-Zа-яА-Я]+([-`][a-zA-Zа-яА-Я]+)?/g).filter(el => !str2_arr.includes(el));
console.log(str2_arr);
console.log(res);

//2
var escapeRegExp = require("escape-string-regexp").escapeRegExp;

let word = "some";
let punct_match = str1.match(/[-!"',.:;?]/g);
punct_count = punct_match ? punct_match.length : 0;
console.log(punct_count);

let word_match = str1.toLocaleLowerCase().match(new RegExp(' ' + escapeRegExp(word) + ' ', 'g'));
console.log(word_match);
let word_count = word_match ? word_match.length : 0;
console.log(word_count);

//3
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

xhr.open('GET',  'https://httpbin.org/#/Auth/get_bearer', true);
xhr.setRequestHeader('Authorization', 'Some');
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;


    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        console.log(xhr.responseText);
    }

};
