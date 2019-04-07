// Type definitions for @cyberblast/config v0.0.7
// Project: https://github.com/cyberblast/config
// Definitions by: cyberblast <https://github.com/cyberblast>

declare class Config {
  constructor(filePath: string);
  load(): Promise<{ [key: string]: any }>;
  settings: { [key: string]: any };
}

export = Config;
