/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Question = mongoose.model('Question');



    /** 
    *  Find Question by id
    */

 exports.question = function(req, res, next, id) {
    Question.load(id, function(err, question) {
        if (err) return next(err);
        if (!question) return next(new Error('Failed to load question ' + id));
        req.question = question;
        next();
    });
};


/**
 * Show a question
 */
exports.show = function(req, res) {
    res.jsonp(req.question);
};


/**
 * List of Articles
 */
exports.all = function(req, res) {
    Question.find().sort('-created').populate('user', 'name username').exec(function(err, questions) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(questions);
        }
    });
};
