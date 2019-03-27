let mod = {};
module.exports = mod;

const fs = require("fs");

async function loadFileAsync(filePath){
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, function (fsError, data) {
      if (fsError) {
        reject(fsError);
        return;
      }
      resolve(JSON.parse(data.toString()));
    });
  });
};

mod.load = async function(filePath, forceReload = false){
  if(forceReload && mod.settings !== undefined){
    delete mod.settings;
  }
  if(mod.settings === undefined){
    mod.settings = await loadFileAsync(filePath);
  }
  return mod.settings;
}
