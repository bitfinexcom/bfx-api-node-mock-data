'use strict'

const genSeqNum = require('../util/gen_seq_num')
const genSymbol = require('../util/gen_symbol')
const genWalletType = require('../util/gen_wallet_type')
const genMarketPrice = require('../util/gen_market_price')
const genTXMeta = require('../util/gen_tx_meta')
const genTXDescription = require('../util/gen_tx_description')

// TODO: configurable balance limits

/**
 * Generates a valid wallet update packet (channel 0)
 *
 * @param {Object?} data
 * @param {number?} data.pubSeq - public sequence number
 * @param {number?} data.authSeq - auth sequence number
 * @param {string?} data.type - wallet type
 * @param {string?} data.currency
 * @param {number?} data.balance
 * @param {number?} data.unsettledInterest
 * @param {number?} data.balanceAvailable
 * @return {Array} wuPacket
 */
const genWalletUpdate = (data = {}) => {
  const {
    pubSeq = genSeqNum(),
    authSeq = Math.random() > 0.5 ? 0 : genSeqNum(), // 0 for snapshots
    type = genWalletType(),
    currency = genSymbol().quote,
    balance = Math.random() * 1000,
    unsettledInterest = Math.random() * 1000
  } = data

  const { balanceAvailable = Math.min(balance, Math.random() * 1000) } = data

  return [
    0, 'wu', [
      type, currency, balance, unsettledInterest, balanceAvailable,

      data.description || genTXDescription({
        maxAmount: balance,
        marketPrice: genMarketPrice(),
        currency
      }),

      genTXMeta()
    ], pubSeq, authSeq
  ]
}

module.exports = genWalletUpdate
