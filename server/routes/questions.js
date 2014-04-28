'use strict';

// Articles routes use articles controller
var questions = require('../controllers/questions');




module.exports = function(app) {

    app.get('/questions', questions.one);
    app.get('/questions/:questionId', questions.show);

    app.param('questionId', questions.question);


};