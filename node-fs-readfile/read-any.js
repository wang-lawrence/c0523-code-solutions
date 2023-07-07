import { readFile } from 'node:fs/promises';

const contentPath = `./${process.argv[2]}`

try {
  const content = await readFile(contentPath, 'utf8');
  console.log(content);
} catch (error) {
  console.log('fail to read content: ', error.message);
}
