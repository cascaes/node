process.on('message', msg => console.log('message reveived on child', msg));

process.send('ready');