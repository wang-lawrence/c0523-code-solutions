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

const parsedJSON = express.json();
app.use(parsedJSON);

app.get('/api/grades', (req, res) => {
  const gradesArray: object[] = [];
  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const newData = { id: nextId, ...req.body };
  grades[nextId] = newData;
  nextId++;
  res.status(201).send(newData);
});

app.listen(8080, () => console.log('Listening on port 8080!'));
