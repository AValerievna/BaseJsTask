let jsonData = require('../resources/data.json');

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();

xhr.open(jsonData.requestType, jsonData.URL, true);
xhr.setRequestHeader(jsonData.headerName, jsonData.headerValue);
xhr.send();

xhr.onreadystatechange = function () {
    const stateNumber = 4;
    const successStatusCode = 200;


    if (xhr.readyState !== stateNumber) return;

    if (xhr.status !== successStatusCode) {
        console.log("Status code: " + xhr.status + ';\nStatus text: ' + xhr.statusText);
    } else {
        console.log("Response:\n" + xhr.responseText);
    }

};