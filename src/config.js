const fs = require("fs");

/**
 * Load file
 * @param { string } filePath Path of json file to load
 * @returns { Promise<Object.<string, any>> } Promise containing file content, parsed to JSON object
 */
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
}

/**
 * Class Config for loading a single json config file
 * @constructor
 * @param { string } filePath Path of json file to load
 */
function Config(filePath) {

  /**
   * @type { Object.<string, any> }
   */
  this.settings = undefined;

  /**
   * Load Config file
   * @returns { Promise<Object.<string, any>> } Promise containing loaded settings
   */
  this.load = async function() {
    if (this.settings !== undefined) {
      delete this.settings;
    }
    this.settings = await readFileAsync(filePath);
    return this.settings;
  }
}

module.exports = Config;
