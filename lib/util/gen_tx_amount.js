'use strict'

const { prepareAmount } = require('bfx-api-node-util')

// TODO: Enable configuration of trading amounts per-symbol

/**
 * Returns a valid transaction amount
 *
 * @return {string} amount
 */
const genTXAmount = () => (
  prepareAmount(Math.random() > 0.5
    ? Math.random() * 100
    : Math.random()
  )
)

module.exports = genTXAmount
