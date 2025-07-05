const mongoose = require('mongoose');

const { Schema } = mongoose;

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    category: {
        type: [String],
        required: true,
        validate: {
            validator: function(v) {
                return Array.isArray(v) && v.lenght > 0;
            },
            message: "Question must have at least one category!"
        }
    },
    creator: String,
    created: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Question", QuestionSchema)