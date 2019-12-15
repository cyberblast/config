const Config = require('../src/config.js');
const configFile = './test/config.json';
let settings;

async function run() {
  console.info('running test for Config module');
  const config = new Config(configFile);
  settings = await config.load();
  console.info('file loaded');
}

function validate() {
  if (settings == null || settings.some !== 'thing') throw 'Settings content not ok!';
  console.info('content ok');
}

run()
  .then(validate)
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
