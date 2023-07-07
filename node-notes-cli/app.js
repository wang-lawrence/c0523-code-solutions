import { readFile, writeFile } from 'node:fs/promises';


const [, , operation, argv3, argv4] = process.argv;
app(operation, argv3, argv4);

async function app(operation, idOrContent, content) {
  try {
    switch (operation){
      case 'read':
        await read();
        break;
      case 'create':
        await create(idOrContent);
        break;
      case 'delete':
        await deleteId(idOrContent);
        break;
      case 'update':
        await update(idOrContent, content);
        break;
      default:
        console.log('Invalid operation, only read/update/create/delete are accepted');
    }
  } catch(error) {
    console.log('Error handling file: ', error);
  }
}

async function read() {
    const data = JSON.parse(await readFile('data.json'));
    const displayData =[]
    for (const key in data.notes) {
      displayData.push(`${key}: ${data.notes[key]}`)
    }
    console.log(displayData.join('\n'));
}

async function create(text) {
    const data = JSON.parse(await readFile('data.json'));
    data.notes[data.nextId.toString()] = text;
    data.nextId++;
    const jsonData = JSON.stringify(data, null, 2);
    await writeFile('data.json', jsonData);
}

async function deleteId(id) {
    const data = JSON.parse(await readFile('data.json'));
    if (data.notes[id]) {
      delete data.notes[id]
    } else {
      console.log(`ID ${id} does not exist`);
    };
    const jsonData = JSON.stringify(data, null, 2);
    await writeFile('data.json', jsonData);
}

async function update(id, text) {
    const data = JSON.parse(await readFile('data.json'));
    if (data.notes[id]) {
      data.notes[id] = text;
    } else {
      console.log(`ID ${id} does not exist`);
    }
    const jsonData = JSON.stringify(data, null, 2);
    await writeFile('data.json', jsonData);
}
