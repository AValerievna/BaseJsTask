

//1
var str1 = "This7 very/ important. some  str.i,ng5 c!reate suspense";
var str2 = "Some important string ";

var res = str1.split(/[^a-zA-Z-]/).filter(el => str2.indexOf(el) === -1);
console.log(res);

//2
var word = "some"
var punct_count = str1.match(/[-!"',.:;?`]/g)
console.log(res.length);
var reg = new RegExp(' '+word+' ','g');
var word_match = str1.match(reg);
var word_count;
if (word_match === null) {
    word_count = 0;
} else {
    word_count = word_match.length;
}
console.log(word_count);

//3

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

xhr.open('GET',  'https://httpbin.org/#/Auth/get_bearer', true);

xhr.send(); // (1)

xhr.onreadystatechange = function() { // (3)
    if (xhr.readyState != 4) return;

    //button.innerHTML = 'Готово!';

    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        console.log(xhr.responseText);
    }

}

//button.innerHTML = 'Загружаю...'; // (2)
//button.disabled = true;