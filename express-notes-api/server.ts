import { readFile, writeFile } from 'node:fs/promises';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/notes', async (req, res) => {
  try {
    const notesData = await readData();
    const notesArray = [];
    for (const key in notesData.notes) {
      notesArray.push(notesData.notes[key]);
    }
    res.status(200).json(notesArray);
  } catch (error) {
    res.status(404).json({ error: `${(error as Error).message}` });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const { notes } = await readData();
    const requestId = Number(req.params.id);
    if (requestId < 0) {
      res.status(400).json({ error: 'ID needs to be a positive number' });
      return;
    }
    if (!notes[requestId]) {
      res.status(404).json({ error: `ID ${requestId} not in notes` });
      return;
    }
    res.status(200).json(notes[requestId]);
  } catch (error) {
    res.status(404).json({ error: `${(error as Error).message}` });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    let { nextId, notes } = await readData();
    const { content } = req.body;
    if (!content) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    const newNote = { id: nextId, content };
    notes[nextId] = newNote;
    nextId++;
    await writeData({ nextId, notes });
    res.status(201).json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const { nextId, notes } = await readData();
    const deleteId = Number(req.params.id);
    if (deleteId < 0) {
      res.status(400).json({ error: 'ID needs to be a positive number' });
      return;
    }
    if (!notes[deleteId]) {
      res.status(404).json({ error: `ID ${deleteId} not in notes` });
      return;
    }
    delete notes[deleteId];
    await writeData({ nextId, notes });
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const notesData = await readData();
    const updateId = Number(req.params.id);
    const { content } = req.body;
    if (updateId < 0) {
      res.status(400).json({ error: 'ID needs to be positive' });
      return;
    }
    if (!content) {
      res.status(400).json({ error: 'Content is a required field' });
      return;
    }
    if (!notesData.notes[updateId]) {
      res.status(404).json({ error: `ID ${updateId} is not found in notes` });
      return;
    }
    notesData.notes[updateId].content = content;
    await writeData(notesData);
    res.status(200).json(notesData.notes[updateId]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => console.log('Listening on port 8080!'));

async function readData() {
  return JSON.parse(await readFile('data.json', 'utf8'));
}

async function writeData(data: object) {
  const jsonData = JSON.stringify(data, null, 2);
  await writeFile('data.json', jsonData);
}
