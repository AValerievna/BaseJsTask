//1
let str1 = "This7 very/ important. some  str.i,ng5 c!reate suspense";
let str2 = "Some important`rt string ";

let str2_arr = str2.toLocaleLowerCase().match(/[a-zA-Zа-яА-Я]+([-`][a-zA-Zа-яА-Я]+)?/g);
let res = str1.toLowerCase().match(/[a-zA-Zа-яА-Я]+([-`][a-zA-Zа-яА-Я]+)?/g).filter(el => !str2_arr.includes(el));
console.log(str2_arr);
console.log(res);

//2
let word = "some";
let punct_count = str1.match(/[-!"',.:;?`]/g);
console.log(punct_count.length);

let word_match = str1.match(new RegExp(' ' + word + ' ', 'g'));
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
