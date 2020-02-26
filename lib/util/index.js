'use strict'

const genCurrency = require('./gen_currency')
const genFee = require('./gen_fee')
const genMarketPrice = require('./gen_market_price')
const genSeqNum = require('./gen_seq_num')
const genSymbol = require('./gen_symbol')
const genTXAmount = require('./gen_tx_amount')
const genTXDescription = require('./gen_tx_description')
const genTXMarket = require('./gen_tx_market')
const genTXMeta = require('./gen_tx_meta')
const genWalletType = require('./gen_wallet_type')
const genOrderID = require('./gen_order_id')

module.exports = {
  genCurrency,
  genFee,
  genMarketPrice,
  genSeqNum,
  genSymbol,
  genTXAmount,
  genTXDescription,
  genTXMarket,
  genTXMeta,
  genWalletType,
  genOrderID
}
