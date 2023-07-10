import express from "express";

 type Person = {
  id: number;
  name: string;
  course: string;
  score: number;
}

type Grades = {
  [id: number]: Person;
};

const grades: Grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesArray: Person[] = [];
  for (const grade in grades) {
   gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
})

app.delete('/api/grades/:id', (req, res) => {

  let deleteId: number = Number(req.params.id);
  delete grades[deleteId];
  res.sendStatus(204);

});

app.listen(8080, () => console.log('Listening on Port 8080'));
