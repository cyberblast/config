// Type definitions for @cyberblast/config v0.0.7
// Project: https://github.com/cyberblast/config
// Definitions by: cyberblast <https://github.com/cyberblast>

/**
 * @class Class Config for loading a single json config file
 */
declare class Config {
  /**
   * Class Config for loading a single json config file
   * @param {string} filePath - Path of json file to load
   */
  constructor(filePath: string);
  /**
   * Load Config file
   * @return { Promise<{ [key: string]: any }> } Promise containing loaded settings
   */
  load(): Promise<{ [key: string]: any }>;
}

export = Config;
