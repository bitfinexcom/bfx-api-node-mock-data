'use strict'

const _sample = require('lodash/sample')
const { WALLET_TYPES } = require('bfx-hf-util')

/**
 * Returns a valid wallet type
 *
 * @return {string} walletType
 */
const genWalletType = () => {
  return _sample(WALLET_TYPES)
}

module.exports = genWalletType
