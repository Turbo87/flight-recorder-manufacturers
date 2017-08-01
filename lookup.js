const MANUFACTURERS = require('.');

module.exports = function lookup(id) {
  let short = id.length === 1;

  id = id.toUpperCase();

  let manufacturers = MANUFACTURERS.filter(it => it[short ? 'short' : 'long'] === id);
  return manufacturers.length !== 0 ? manufacturers[0].name : id;
};
