'use strict';

const path = require('path'),
      fs = require('fs');

module.exports = {
    downloadResume: (req, res) => {
        let fileName = `matthew_holland_resume.pdf`;
        let filePath = path.join(__dirname, `../public/docs/${fileName}`);

        let file = fs.createReadStream(filePath);
        let stat = fs.statSync(filePath);
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=quote.pdf');
        file.pipe(res);
        /* Download script
        res.download(file, function (err) {
            if (err) {
                console.log('Error: ' + err);
            } else {
                console.log('Success!');
            }
        });*/
    },
}