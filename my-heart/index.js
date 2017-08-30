import fs from 'fs';

function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('./index.html1', 'utf-8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function run() {
  const data = await readFile();
  console.log(data);
}

run();