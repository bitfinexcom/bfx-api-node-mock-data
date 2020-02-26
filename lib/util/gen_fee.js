'use strict'

const _sample = require('lodash/sample')

// TODO: Move into bfx-hf-util
// TODO: Add script to pull from https://www.bitfinex.com/fees
// TODO: Take into account LEO discounts (randomly)
const FEES = [
  0.002, 0.0018, 0.0016, 0.0014, 0.0012, 0.001, 0.0009, 0.00085, 0.0008,
  0.00075, 0.0006, 0.00055, 0.04, 0.02, 0
]

/**
 * Returns a valid fee percentage
 *
 * @return {number} feePercentage
 */
const genFee = () => _sample(FEES)

module.exports = genFee
