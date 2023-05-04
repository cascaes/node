const common = require('../common');

import { fork } from 'child_process';
import { fileURLToPath } from 'url';

if(process.argv[2] !== 'child') {
    const filename = fileURLToPath(import.meta.url);
    const cp = fork(filename, ['child']);
    const message = 'hello word';
    cp.send(message)
    const [received] = await once(cp, 'message')
    asserts.deepStrinctEqual(received, message)
    cp.disconnect()
    await once(cp, 'exite')
}else{
    process.on('message', msg => process.send(msg))
}