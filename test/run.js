const config = require('../src/config.js');
const configFile = './test/config.json';

async function run(){
  const settings = await config.load(configFile, true);
  console.info('file loaded');
  if(settings.some !== 'thing') onError('Settings content not loaded!');
  console.info('content ok');
}
run();
