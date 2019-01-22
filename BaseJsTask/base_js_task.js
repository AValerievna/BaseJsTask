//1
//let str1 = "Some This7 very/ important. some some str.i,ng5 c!reate suspense some";
//let str2 = "Some important`rt string ";

var resources = require('resources');

let str1 = resources.get('FirstString');
let str2 = resources.get('SecondString');
let str2_arr = str2.toLocaleLowerCase().match(/[a-zA-Zа-яА-Я]+([-`][a-zA-Zа-яА-Я]+)?/g);
let res = str1.toLowerCase().match(/[a-zA-Zа-яА-Я]+([-`][a-zA-Zа-яА-Я]+)?/g).filter(el => !str2_arr.includes(el));
console.log(str2_arr);
console.log(res);

//2
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function some(string) {
    console.log("some");
}

let word = "some";
let punct_match = str1.match(/[-!"',.:;?]/g);
punct_count = punct_match ? punct_match.length : 0;
console.log("Number of punctuation signs: " + punct_count);

let word_match = str1.toLocaleLowerCase().match(new RegExp(escapeRegExp(word), 'g'));
let word_count = word_match ? word_match.length : 0;
console.log("Number of word \"" + word + "\": " + word_count);

//3
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://httpbin.org/bearer', true);
xhr.setRequestHeader('Authorization', 'Bearer some-token');
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;


    if (xhr.status !== 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        console.log(xhr.responseText);
    }

};
