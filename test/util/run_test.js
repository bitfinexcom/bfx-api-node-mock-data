/* eslint-env mocha */
'use strict'

const SAMPLES_PER_TEST = 1000

/**
 * Exec the cb a configured number of times
 */
module.exports = (label, cb, iterations = SAMPLES_PER_TEST) => {
  it(label, async () => {
    let i = iterations

    while (i-- >= 0) {
      await cb()
    }
  })
}
