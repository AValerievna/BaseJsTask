let fs = require('fs');
let jsonData = JSON.parse(fs.readFileSync('resources/data.json', 'utf8'));

module.exports = jsonData;