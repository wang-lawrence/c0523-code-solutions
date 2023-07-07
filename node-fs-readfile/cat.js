import { readFile } from 'node:fs/promises';

const contentPaths = process.argv.slice(2).map(content =>  `./${content}`);

try {
  const promises = contentPaths.map(path => readFile(path, 'utf8'))
  const contents = await Promise.all(promises)
  console.log(contents.join('\n'));
} catch (error) {
  console.log('fail to read content: ', error.message);
}
