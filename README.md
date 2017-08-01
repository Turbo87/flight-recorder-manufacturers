flight-recorder-manufacturers
==============================================================================

[![Greenkeeper badge](https://badges.greenkeeper.io/Turbo87/flight-recorder-manufacturers.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/Turbo87/flight-recorder-manufacturers.svg?branch=master)](https://travis-ci.org/Turbo87/flight-recorder-manufacturers)

Flight Recorder Manufacturers and their assigned IGC codes


Usage
------------------------------------------------------------------------------

```js
const MANUFACTURERS = require('flight-recorder-manufacturers');

for (let manufacturer of MANUFACTURERS) {
  console.log(manufacturer.name);
}
```

```js
const lookup = require('flight-recorder-manufacturers/lookup');

lookup('V'); // -> LXNAV
lookup('FLA'); // -> Flarm
lookup('XCS'); // -> XCSoar
```


License
------------------------------------------------------------------------------

flight-recorder-manufacturers is licensed under the [MIT License](LICENSE).
