# cyberblast config

A simple config file loader for node

[![Build Status](https://travis-ci.org/cyberblast/config.svg?branch=dev)](https://travis-ci.org/cyberblast/config)
[![npm version](https://badge.fury.io/js/%40cyberblast%2Fconfig.svg)](https://badge.fury.io/js/%40cyberblast%2Fconfig)

## Usage

using async
```js
const Config = require('@cyberblast/config');

async function run(){
  const config = new Config('./yourFile.json');
  const settings = await config.load();
  // do something with settings object
  console.log(settings.greet);
  // or like that
  console.log(config.settings.greet);
}
run();
```

without async
```js
const Config = require('@cyberblast/config');

const config = new Config('./yourFile.json');
config.load().then(settings => {
  // do something with settings object
  console.log(settings.greet);
  // or like that
  console.log(config.settings.greet);
});
```

Imaginary config file `./yourFile.json` used in that sample:
```json
{
  "greet": "Hello World"
}
```

## Legal

Please take note of files [LICENSE](https://raw.githubusercontent.com/cyberblast/config/master/LICENSE) and [CONTRIBUTING](https://raw.githubusercontent.com/cyberblast/config/master/CONTRIBUTING).
