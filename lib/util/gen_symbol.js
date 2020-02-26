'use strict'

const _isEmpty = require('lodash/isEmpty')
const _isString = require('lodash/isString')
const _sample = require('lodash/sample')
const { SYMBOLS } = require('bfx-hf-util')

/**
 * Returns a valid symbol split into API symbol, base currency, and quote
 * currency
 *
 * @param {Object?} args
 * @param {string?} args.base - optional, filters symbol by base pair
 * @param {string?} args.quote - optional filters symbol by quote pair
 * @return {Object} symbol - { sym, base, quote }
 */
const genSymbol = ({ base, quote } = {}) => {
  let filtered = Object.values(SYMBOLS)

  if (_isString(base) && !_isEmpty(base)) {
    filtered = filtered.filter(sym => sym.substring(1, 4) === base)
  }

  if (_isString(quote) && !_isEmpty(quote)) {
    filtered = filtered.filter(sym => sym.substring(4) === quote)
  }

  const sym = _sample(filtered)

  return {
    sym,
    base: sym.substring(1, 4),
    quote: sym.substring(4)
  }
}

module.exports = genSymbol
