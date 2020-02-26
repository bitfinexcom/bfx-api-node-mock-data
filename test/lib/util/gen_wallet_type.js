/* eslint-env mocha */
'use strict'

const assert = require('assert')
const _includes = require('lodash/includes')
const { WALLET_TYPES } = require('bfx-hf-util')
const runTest = require('../../util/run_test')
const genWalletType = require('../../../lib/util/gen_wallet_type')

describe('genWalletType', () => {
  runTest('generates a valid wallet type present in bfx-hf-util', () => {
    const type = genWalletType()
    assert(_includes(WALLET_TYPES, type))
  })
})
