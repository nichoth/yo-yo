var test = require('tape')
var yoTests = require('./tests')
var yo = require('../')

yoTests(yo, yo.update, test)
