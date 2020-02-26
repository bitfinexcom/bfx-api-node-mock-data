'use strict'

const { preparePrice } = require('bfx-api-node-util')

// TODO: Grab current market prices for all known symbols and use them as max

/**
 * Returns a valid market price
 *
 * @return {string} price
 */
const genMarketPrice = () => (
  preparePrice(Math.random() > 0.5
    ? Math.random() * 10000
    : Math.random()
  )
)

module.exports = genMarketPrice
