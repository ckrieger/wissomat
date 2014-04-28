/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Question = mongoose.model('Question'),
             _ = require('lodash');

 var questionsLeft = [1,2,3];            
    


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
 * List of Questions
 */
exports.all = function(req, res) {
    console.log('list question');
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

/**
* Gibt eine Frage zurück die Fragen werden randomisiert ausgewählt
*/
    exports.one = function(req, res){

        // hölt eine id aus array und löscht diese aus dem array
        var randomId = questionsLeft[Math.floor(Math.random()*questionsLeft.length)];
        var index = questionsLeft.indexOf(randomId);
        questionsLeft.splice(index, 1);
    
        Question.find( {id : randomId} , function(err, question){
            if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(question);
        }
        });
    };
