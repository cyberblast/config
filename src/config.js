const fs = require("fs");

async function readFileAsync(filePath){
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

module.exports = function(filePath){
  this.load = async function(){
    if(this.settings !== undefined){
      delete this.settings;
    }
    this.settings = await readFileAsync(filePath);
    return this.settings;
  }
};
