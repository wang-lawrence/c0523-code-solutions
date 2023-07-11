import express from 'express';

const app = express();

let nextId = 1;

type Person = {
  id: number;
  name: string;
  score: number;
  course: string;
};

type Grades = {
  [id: number]: Person;
};

const grades: Grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray: Person[] = [];
  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const newData = req.body;
  if (!newData.name || !newData.course || !newData.score) {
    res.status(400).send('Incomplete request');
    return;
  }
  grades[nextId] = newData;
  nextId++;
  res.status(201).send(newData);
});

app.listen(8080, () => console.log('Listening on port 8080!'));
