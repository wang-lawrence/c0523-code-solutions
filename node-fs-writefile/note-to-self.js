import { writeFile } from 'node:fs/promises';

const note = process.argv[2];

async function createNoteToSelf(text) {
  try {
    await writeFile('./note.txt', text + '\n');
  } catch (error) {
    console.log('failed to write file: ', error.message);
  }
}

createNoteToSelf(note);
