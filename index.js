var bel = require('bel') // turns template tag into DOM elements
var updateEl = require('./update-el')  // like morphdom but deals with event listeners too

module.exports = require('./yo-yo')(bel, updateEl);
