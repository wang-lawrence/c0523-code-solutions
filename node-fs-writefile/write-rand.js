import { writeFile } from 'node:fs/promises';

async function createRandomTxt() {
try {
  const randomNum = Math.floor(Math.random() *100) + 1
  await writeFile('random.txt', randomNum.toString() + '\n');
  } catch (error) {
  console.log('failed to write file: ', error);
  }
}

createRandomTxt();
