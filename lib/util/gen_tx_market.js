'use strict'

const genCurrency = require('./gen_currency')
const genSymbol = require('./gen_symbol')

const MAX_SEARCH_ATTEMPTS = 100

/**
 * Returns a market pair that includes the specified currency (optional,
 * default random)
 *
 * @param {string?} currency - default random
 * @return {string} symbol
 */
const genTXMarket = (currency = genCurrency()) => {
  let i = MAX_SEARCH_ATTEMPTS

  while (i--) {
    const symbol = genSymbol()

    if (symbol.quote === currency || symbol.base === currency) {
      return symbol.sym.substring(1)
    }
  }

  // fallback to random if currency not found
  return genSymbol().sym.substring(1)
}

module.exports = genTXMarket
