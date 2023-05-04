import { fork } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath} from 'url';

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const childProcessFile = `${currentDirectory}/child.js`;
const cp = fork(childProcessFile);
process.on('message', msg => console.log('msg', msg));

cp.send('Hello word');