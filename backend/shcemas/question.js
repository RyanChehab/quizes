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