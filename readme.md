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
  // do something with your settings object
  console.log(settings.greet);
}
run();
```

without async
```js
const Config = require('@cyberblast/config');

const config = new Config('./yourFile.json');
config.load().then(settings => {
  // do something with your settings object
  console.log(settings.greet);
});
```

Imaginary config file `./yourFile.json` used in that sample:
```json
{
  "greet": "Hello World"
}
```

## Options

You can also specify a second argument `forceReload` for `config.load`, which is `false` by default.  
When set to `true`, a subsequent call of config.load will reload the file from file system. Otherwise it will use present "cached" values.

You can also access once loaded settings via `config.settings`.

## Legal

Please take note of files [LICENSE](https://raw.githubusercontent.com/cyberblast/config/master/LICENSE) and [CONTRIBUTING](https://raw.githubusercontent.com/cyberblast/config/master/CONTRIBUTING).
