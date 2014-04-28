'use strict';

module.exports = function(app) {

    // Home route
    var start = require('../controllers/start');

    app.get('/start');
};
