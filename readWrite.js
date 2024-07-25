const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
    if(err) console.log(err.message);
    console.log(data.toString());
})

let data = "text 2";
fs.appendFile('file.txt', data, (err) => {
    if(err) console.log(err);
})
