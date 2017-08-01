const lookup = require('./lookup');

describe('flight recorder manufacturers', () => {
  test('lookup()', () => {
    expect(lookup('X')).toEqual('X');
    expect(lookup('V')).toEqual('LXNAV');
    expect(lookup('G')).toEqual('Flarm');
    expect(lookup('LXV')).toEqual('LXNAV');
    expect(lookup('LXN')).toEqual('LX Navigation');
    expect(lookup('FLA')).toEqual('Flarm');
    expect(lookup('XCS')).toEqual('XCSoar');
    expect(lookup('XXX')).toEqual('XXX');
    expect(lookup('Foo')).toEqual('FOO');
  });
});
