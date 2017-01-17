'use strict';

//const services = require('../services');

module.exports = {
    renderIndexPage: (req, res) => {
        res.render('index', { title: 'Portfolio', message: 'This is a section' });
    },
}