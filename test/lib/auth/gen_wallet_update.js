/* eslint-env mocha */
'use strict'

const assert = require('assert')
const _isFinite = require('lodash/isFinite')
const { Wallet } = require('bfx-api-node-models')
const { genWalletUpdate } = require('../../../')
const runTest = require('../../util/run_test')

describe('genWalletUpdate', () => {
  runTest('generates valid data', () => {
    const wu = genWalletUpdate()
    const [chanID, msgType, payload, pubSeq, authSeq] = wu

    assert.strictEqual(chanID, 0)
    assert.strictEqual(msgType, 'wu')
    assert(_isFinite(pubSeq))
    assert(_isFinite(authSeq))

    assert.deepStrictEqual(new Wallet(payload).serialize(), payload)
  })
})
