'use strict'

const _uniq = require('lodash/uniq')
const _flatten = require('lodash/flatten')
const _sample = require('lodash/sample')
const { SYMBOLS } = require('bfx-hf-util')

const CURRENCIES = _uniq(_flatten(Object.values(SYMBOLS).map(sym => [
  sym.substring(1, 4), sym.substring(4)
])))

/**
 * Returns a valid currency
 *
 * @return {string} currency
 */
const genCurrency = () => _sample(CURRENCIES)

module.exports = genCurrency
