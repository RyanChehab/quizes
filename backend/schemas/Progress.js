import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  completed: {
    type: Boolean,
    default: false, 
  },
  answers: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
      },
      userAnswer: {
        type: String,
        required: true,
      },
      correct: {
        type: Boolean, 
        default: false,
      },
    },
  ],
});

const Progress = mongoose.model('Progress', progressSchema);
export default Progress;