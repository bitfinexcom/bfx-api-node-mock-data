'use strict'

const _sample = require('lodash/sample')
const genMarketPrice = require('./gen_market_price')
const genTXAmount = require('./gen_tx_amount')
const genSymbol = require('./gen_symbol')
const genFee = require('./gen_fee')

/**
 * Generates a valid wallet update description
 *
 * TODO: Expand possibilities
 *
 * @param {Object} args
 * @param {number?} args.amount - default random
 */
const genTXDescription = ({
  amount = genTXAmount(),
  symbol = genSymbol(),
  price = genMarketPrice(),
  fee = genFee()
} = {}) => (
  _sample([
    null,
    `Trading fees for ${amount} ${symbol.base} (${symbol.sym}) @ ${price} on BFX (${fee}%)`,
    `${Math.random() > 0.5 ? 'Exchange' : 'Margin'} ${amount} ${symbol.base} for ${symbol.quote} @ ${price}`
  ])
)

module.exports = genTXDescription
