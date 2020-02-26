'use strict'

/**
 * Returns a valid sequence number
 *
 * @param {number} max - upper limit, specify 0 for snapshots
 */
const genSeqNum = (max = 100) => {
  return Math.ceil(Math.random() * max) // 0 only sent for snapshots
}

module.exports = genSeqNum
