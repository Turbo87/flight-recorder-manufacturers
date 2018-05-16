const lookup = require('./lookup');

describe('flight recorder manufacturers', () => {
  const tests = [
    ['X', 'X'],
    ['V', 'LXNAV'],
    ['G', 'Flarm'],
    ['LXV', 'LXNAV'],
    ['LXN', 'LX Navigation'],
    ['FLA', 'Flarm'],
    ['XCS', 'XCSoar'],
    ['XXX', 'XXX'],
    ['Foo', 'FOO'],
    ['XGD', 'GpsDump'],
  ];

  for (let [input, expected] of tests) {
    test(`${input} -> ${expected}`, () => {
      expect(lookup(input)).toEqual(expected);
    });
  }
});
