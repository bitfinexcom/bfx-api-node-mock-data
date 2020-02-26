/* eslint-env mocha */
'use strict'

const assert = require('assert')
const _includes = require('lodash/includes')
const { SYMBOLS } = require('bfx-hf-util')
const runTest = require('../../util/run_test')
const genSymbol = require('../../../lib/util/gen_symbol')

describe('genSymbol', () => {
  runTest('generates a valid symbol present in bfx-hf-util', () => {
    const { sym } = genSymbol()
    assert(_includes(SYMBOLS, sym))
  })

  runTest('provides valid base & quote strings', () => {
    const { sym, quote, base } = genSymbol()
    assert.strictEqual(`t${base}${quote}`, sym)
  })

  runTest('filters symbol by base currency if provided', () => {
    const targetBase = 'BTC'
    const { sym, quote, base } = genSymbol({ base: targetBase })

    assert.strictEqual(base, targetBase)
    assert.strictEqual(`t${base}${quote}`, sym)
  })

  runTest('filters symbol by quote currency if provided', () => {
    const targetQuote = 'USD'
    const { sym, quote, base } = genSymbol({ quote: targetQuote })

    assert.strictEqual(quote, targetQuote)
    assert.strictEqual(`t${base}${quote}`, sym)
  })
})
