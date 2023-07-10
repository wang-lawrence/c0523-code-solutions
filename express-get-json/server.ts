import express from "express";


interface Person {
  id: number;
  name: string;
  course: string;
  score: number;
}

interface grades {
  12: Person,
  47: Person,
  273: Person
}

const grades = {
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

const gradesArray: object[] = [];
for (const grade in grades) {
  gradesArray.push(grades[grade]);
}

const app = express();

app.listen(8080, () => console.log('Listening on Port 8080'))
app.get('/api/grades', (req, res) => {
    res.json(gradesArray);
});
