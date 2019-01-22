var fs = require('fs');
exports.jsonData = JSON.parse(fs.readFileSync('resources/data.json', 'utf8'));