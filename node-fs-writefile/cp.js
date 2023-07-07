import { readFile } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';

const srcPath= process.argv[2];
const destPath = process.argv[3];

async function copyFile (src, dest) {
  try {
    const srcContent = await readFile(src, 'utf-8');
    await writeFile(dest, srcContent + '\n');
  } catch(error) {
    console.log('failed to copy: ', error)
  }
}

copyFile(srcPath, destPath);
