fs = require('fs');

fs.readFile(
    './node02/JS03/example.txt',
    'utf-8',
    (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(data);
    }
);
