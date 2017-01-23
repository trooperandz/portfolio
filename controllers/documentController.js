'use strict';

const path = require('path');

module.exports = {
    downloadResume: (req, res) => {
        let fileName = 'matthew_holland_resume.pdf';
        let file = path.join(__dirname, `../public/docs/${fileName}`);

        res.download(file, function (err) {
            if (err) {
                console.log('Error: ' + err);
            } else {
                console.log('Success!');
            }
        });
    },
}