var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


   /**
   * Question Schema
   */
var QuestionSchema = new Schema({
    id:  Number,
        
    question: String,
    answer: String,
    wrongOne: String,
    wrongTwo: String,
    wrongThree: String,
    category: String,
    topic: String

});

/**
 * Statics
 */
QuestionSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    });
};





mongoose.model('Question', QuestionSchema);