let mod = {};
module.exports = mod;

const fs = require("fs");

function loadFile(error, complete, path){
  fs.readFile(path, function (fsError, data) {
    if (fsError) {
      error(fsError);
      return;
    }
    
    let file;
    try{
      file = JSON.parse(data.toString());
    } catch(e){
      error(e);
      return;
    }
    complete(file);
  });
};

mod.load = function(onError, onSuccess, filePath, forceReload = false){
  if(forceReload && mod.settings !== undefined){
    delete mod.settings;
  }
  if(mod.settings === undefined){
    loadFile(
      onError, 
      file => {
        mod.settings = file;
        onSuccess(file);
      },
      filePath
    );
  } else {
    onSuccess(mod.settings);
  }
};
