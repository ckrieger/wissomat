var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


   /**
   * Question Schema
   */
var QuestionSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    question: String,
    answer: String,
    wrongOne: String,
    wrongTwo: String,
    wrongThree: String,
    category: String,
    topic: String

});





mongoose.model('Question', QuestionSchema);