'use strict'

/**
 * Generates a valid random order ID
 *
 * @return {number} orderID
 */
const genOrderID = () => Math.floor(Math.random() * 100000000000)

module.exports = genOrderID
