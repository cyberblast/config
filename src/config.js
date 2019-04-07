const fs = require("fs");

async function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, function(fsError, data) {
      if (fsError) {
        reject(fsError);
        return;
      }
      resolve(JSON.parse(data.toString()));
    });
  });
};

/**
 * Class Config for loading a single json config file
 * @param {string} filePath - Path of json file to load
 */
function Config(filePath) {
  /**
   * Load Config file
   * @return { Promise<any> } Promise containing loaded settings
   */
  this.load = async function() {
    if (this.settings !== undefined) {
      delete this.settings;
    }
    this.settings = await readFileAsync(filePath);
    return this.settings;
  }
};

module.exports = Config;
