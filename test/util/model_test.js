'use strict'

const assert = require('assert')

module.exports = (Model, data) => {
  assert.deepStrictEqual(new Model(data).serialize(), data)
  assert.deepStrictEqual(new Model(Model.unserialize(data)).serialize(), data)
}
