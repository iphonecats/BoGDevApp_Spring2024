import express from 'express';
import { database } from './database.js';
import cors from "cors";

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

// changes don't write into file, will revert to original after restarting server
let data = database

const generateId = () => {
  const maxId = data.length > 0
    ? Math.max(...data.map(n => n.id))
    : 0
  return maxId + 1
}

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/bog/users', (req, res) => {
    res.json(data).status(200);
});


app.get('/api/bog/users/:id', (req, res) => {
    const user = data.filter((user) => user.id === req.params.id)[0]
    res.json(user).status(200)
});

app.delete('/api/bog/users/:id', (req, res) => {
  data = data.filter((user) => user.id !== req.params.id)
  res.status(204).end()
});

app.post('/api/bog/users', (req, res) => {
  const newUser = {
    name: req.body.name,
    avatar: req.body.avatar,
    hero_project: req.body.hero_project,
    notes: req.body.notes,
    email: req.body.email,
    phone: req.body.phone,
    rating: req.body.rating,
    status: req.body.status,
    id: String(generateId()),
  };

  data.push(newUser);
  res.json(newUser).status(201);
});

app.put('/api/bog/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUserIndex = data.findIndex((user) => user.id === userId);

  if (updatedUserIndex !== -1) {
    data[updatedUserIndex] = {
      ...data[updatedUserIndex],
      ...req.body,
    };

    res.json(data[updatedUserIndex]).status(200);
  } else {
    res.status(404).json({ error: 'Id not found' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
