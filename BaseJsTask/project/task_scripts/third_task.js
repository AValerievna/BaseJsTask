let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();

xhr.open('GET', jsonData.URL, true);
xhr.setRequestHeader(jsonData.HeaderName, jsonData.HeaderValue);
xhr.send();

xhr.onreadystatechange = function () {
    const stateNumber = 4;
    const successStatusCode = 200;


    if (xhr.readyState !== stateNumber) return;

    if (xhr.status !== successStatusCode) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        console.log(xhr.responseText);
    }

};