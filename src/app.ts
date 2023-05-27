import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/UserRoutes';
import hobbyRoutes from './routes/HobbyRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/hobbies', hobbyRoutes);

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://d12gayen:eB8pcAG5zRiDigRn@cluster0.lsrh9kf.mongodb.net/',
    {
      //useNewUrlParser: true,
      // useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

export default app;
