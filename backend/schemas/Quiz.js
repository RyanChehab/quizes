import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['input','multiple-choice']
    },
    options: {
        type: [String],
        default: undefined,
    },
    correctAnswer: {
        type: String,
        required: true, 
      },
      points: {
        type: Number,
        required: true, // Points for answering correctly
      },

});

const quizSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String, 
    default: '',
  },
  questions: [questionSchema],
});

const Quiz = mongoose.model('quiz', quizSchema);

export default Quiz;