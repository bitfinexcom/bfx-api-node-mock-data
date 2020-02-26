'use strict'

const genSeqNum = require('../util/gen_seq_num')

/**
 * Generates a valid connection heartbeat (channel 0)
 *
 * @param {Object?} data
 * @param {number?} data.pubSeq - public sequence number
 * @return {Array} packet
 */
const genHeartbeat = ({ pubSeq = genSeqNum() } = {}) => (
  [0, 'hb', pubSeq]
)

module.exports = genHeartbeat
