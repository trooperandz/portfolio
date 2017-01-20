'use strict';

const path = require('path');

module.exports = {
    downloadResume: (req, res) => {
        let file = path.join(__dirname, '../public/docs/matthew_holland_resume.pdf');
        console.log('file: ' + file)
        res.download(file, function (err) {
            if (err) {
                console.log('Error: ' + err);
            } else {
                console.log('Success!');
            }
        });
    },
}