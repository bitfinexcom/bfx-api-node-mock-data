'use strict'

const authGenerators = require('./lib/auth')
const publicGenerators = require('./lib/public')
const utilGenerators = require('./lib/util')

module.exports = {
  ...authGenerators,
  ...publicGenerators,
  ...utilGenerators
}
