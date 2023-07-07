import { readFile, writeFile } from 'node:fs/promises';


const [, , operation, argv3, argv4] = process.argv;
app(operation, argv3, argv4);

async function app(operation, argv3, argv4) {
  switch (operation){
    case 'read':
       read();
      break;
    case 'create':
      create(argv3);
      break;
    case 'delete':
      deleteId(argv3);
      break;
    case 'update':
      update(argv3, argv4);
      break;
    default:
      console.log('Invalid operation, only read/update/create/delete are accepted');
  }
}

async function read() {
  try {
    const data = JSON.parse(await readFile('data.json'));
    const displayData =[]
    for (const key in data.notes) {
      displayData.push(`${key}: ${data.notes[key]}`)
    }
    console.log(displayData.join('\n'));
  } catch(error) {
  console.log('Error reading file: ', error);
  }
}

async function create(text) {
  try {
    const data = JSON.parse(await readFile('data.json'));
    data.notes[data.nextId.toString()] = text;
    data.nextId++;
    const jsonData = JSON.stringify(data, null, 2);
    await writeFile('data.json', jsonData);
  } catch(error) {
    console.log('Error handling file: ', error);
  }
}

async function deleteId(id) {
  try {
    const data = JSON.parse(await readFile('data.json'));
    delete data.notes[id];
    const jsonData = JSON.stringify(data, null, 2);
    await writeFile('data.json', jsonData);
  } catch (error) {
    console.log('Error handling file: ', error);
  }
}

async function update(id, text) {
  try {
    const data = JSON.parse(await readFile('data.json'));
    if (data.notes[id]) {
      data.notes[id] = text;
    } else {
      console.log(`ID ${id} does not exist`);
    }
    const jsonData = JSON.stringify(data, null, 2);
    await writeFile('data.json', jsonData);
  } catch (error) {
    console.log('Error handling file: ', error);
  }
}
