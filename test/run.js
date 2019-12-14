const Config = require('../src/config.js');
const configFile = './test/config.json';

async function run() {
  console.info('running test for Config module');
  const config = new Config(configFile);
  const settings = await config.load();
  console.info('file loaded');
  if (settings.some !== 'thing') throw 'Settings content not loaded!';
  console.info('content ok');
}
run();
