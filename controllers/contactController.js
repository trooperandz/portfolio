'use strict';

const models = require('../models'),
      nodemailer = require('nodemailer');

// Create nodemailer transporter for your email account
const transporter = nodemailer.createTransport('smtps://mtholland10%40gmail.com:TrooperandZ1276@smtp.gmail.com');

module.exports = {
    processContactForm: (req, res) => {
        let name = req.body.name;
        let email = req.body.email;
        let message = req.body.message;

        // Send yourself an email for the contact message
        let mailOpts = {
            from: name,
            to: `mtholland10@gmail.com`,
            subject: `Re: mtholla.com porfolio contact`,
            text: `Name: ${name} \nEmail: ${email} \nMessage: \n   ${message}`
        };

        transporter.sendMail(mailOpts, (error, response) => {
            if (error) {
                console.log('error' + error);
            } else {
                console.log('email sent!');
            }
        });

        // Save the contact message in the db
        models.Contact.create({
            name, email, message
        }).then(data => {
            res.send('success');
        }).catch(err => {
            res.send('error');
        });
    }
}