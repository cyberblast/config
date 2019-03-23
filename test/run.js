const config = require('../src/config.js');

function onError(e){
  throw e;
}
function onSuccess(settings){
  console.info('file loaded');
  if(settings.some !== 'thing') onError('Settings content not loaded correctly!');
  console.info('content ok');
}

config.load(
  onError,
  onSuccess,
  './test/config.json',
  true);
