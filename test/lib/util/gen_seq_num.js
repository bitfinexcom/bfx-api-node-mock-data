/* eslint-env mocha */
'use strict'

const assert = require('assert')
const _isFinite = require('lodash/isFinite')
const runTest = require('../../util/run_test')
const genSeqNum = require('../../../lib/util/gen_seq_num')

describe('genSeqNum', () => {
  runTest('should never return 0 (snapshots only)', () => {
    const n = genSeqNum(42)
    assert(_isFinite(n) && n > 0)
  })

  runTest('respects provided max value', () => {
    const nA = genSeqNum(42)
    assert(_isFinite(nA) && nA >= 1 && nA <= 42)

    const nB = genSeqNum(12)
    assert(_isFinite(nB) && nB >= 1 && nB <= 12)
  })

  runTest('defaults to a max value of 100', () => {
    const n = genSeqNum()
    assert(_isFinite(n) && n >= 1 && n <= 100)
  })
})
