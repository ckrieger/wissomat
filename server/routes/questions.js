'use strict';

// Articles routes use articles controller
var questions = require('../controllers/questions');




module.exports = function(app) {

    app.get('/questions', questions.all);


   

};