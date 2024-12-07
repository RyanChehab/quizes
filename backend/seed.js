import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './schemas/User.js';
import Quiz from './schemas/Quiz.js'; 
import Progress from './schemas/Progress.js'; 

dotenv.config();

mongoose
  .connect(process.env.DB_URL )
  .then(async () => {
    console.log('Connected to MongoDB');

    // Create a user
    const user = await User.create({
      name: 'Ryan Chehab',
      email: 'ryan@example.com',
      password: '123',
    });

    console.log('User created:', user);

    // Create a test quiz
    const quiz = await Quiz.create({
      title: 'Development Quiz',
      description: 'A quiz about development topics.',
      questions: [
        {
          text: 'What is Laravel?',
          type: 'multiple-choice',
          options: ['Framework', 'Library', 'Compiler'],
          correctAnswer: 'Framework',
          points: 10,
        },
        {
          text: 'What is 10 * 10',
          type: 'input',
          correctAnswer: '100',
          points: 5,
        },
      ],
    });

    console.log('Quiz created:', Quiz);

    // Create progress for the user
    const progress = await Progress.create({
      userId: user._id,
      quizId: quiz._id,
      score: 15,
      completed: true,
      answers: [
        { questionId: quiz.questions[0]._id, userAnswer: 'Framework', correct: true },
        { questionId: quiz.questions[1]._id, userAnswer: '5', correct: true },
      ],
    });

    console.log('Progress created:', Progress);

    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Error seeding data:', err);
    mongoose.disconnect();
  });