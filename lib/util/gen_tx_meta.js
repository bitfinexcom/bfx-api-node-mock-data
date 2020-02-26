'use strict'

const _sample = require('lodash/sample')
const genOrderID = require('./gen_order_id')
const genMarketPrice = require('./gen_market_price')
const genTXAmount = require('./gen_tx_amount')

/**
 * Generates a valid transaction meta field
 *
 * @param {object?} data - optional, default random
 * @param {string?} data.reason
 * @param {number?} data.orderID
 * @param {number?} data.orderIDOpponent
 * @param {string?} data.tradePrice
 * @param {string?} data.tradeAmount
 * @return {Object|null} meta - may be null
 */
const genTXMeta = (data = {}) => (
  _sample([null, {
    reason: data.reason || 'TRADE', // TODO: expand possibilities
    order_id: data.orderID || genOrderID(),
    order_id_oppo: data.orderIDOpponent || genOrderID(),
    trade_price: data.tradePrice || genMarketPrice(),
    trade_amount: data.tradeAmount || genTXAmount()
  }])
)

module.exports = genTXMeta
