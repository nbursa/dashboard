import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5001;

const mongoURI = process.env.MONGO_URI as string;
const dbName = process.env.DATABASE_NAME as string;
const collectionName = process.env.COLLECTION_NAME as string;

app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI, { dbName });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const todoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { collection: collectionName });

const Todo = mongoose.model('Todo', todoSchema);

app.get('/api/todos', async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
