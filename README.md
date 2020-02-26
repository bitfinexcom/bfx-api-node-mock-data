# Bitfinex Mock Data Generator for Node.JS - Bitcoin, Ethereum, Ripple and more

[![Build Status](https://travis-ci.org/bitfinexcom/bfx-api-node-mock-data.svg?branch=master)](https://travis-ci.org/bitfinexcom/bfx-api-node-mock-data)

A simple library providing generators of random valid data packets as sent by the Bitfinex API. Note that the source data pool (symbols, fees, etc) are specific to Bitfinex.

## Features

* Official implementation
* All WSv2 and RESTv2 data packets included
* Random generation within configurable bounds of all fields
* Can be used to audit API compliance

## Installation

```bash
  npm i --save bfx-api-node-mock-data
```

### Quickstart

See the `examples` folder for code samples. Basic usage consists of pulling in the generator you need and running it

```js
const { genWalletUpdate } = require('bf-api-node-mock-data')

// Data is optional, in this case we only specify the currency
const packet = genWalletUpdate({ currency: 'USD' })

console.log(`valid \'wu\' packet: ${packet}`)
```

Might output:

```text
[
  0,
  "wu",
  [
    "funding",
    "MTN",
    281.4462748849231,
    139.52192107528072,
    281.4462748849231,
    "Trading fees for 52.24223474 MTN (tMTNBTC) @ 0.33530 on BFX (0.00075%)",
    null
  ],
  33,
  0
]
```

### Docs

Refer to the `docs/` folder for API-level documentation. The full list of generators is as follows:

#### Auth Channel [0] Packets

* `'hb'` - `genHeartbeat()`
* `'wu'` - `genWalletUpdate()`

#### Public Channel [n] Packets

Coming soon!

#### Packet Internals

* `genCurrency()`
* `genFee()`
* `genMarketPrice()`
* `genOrderID()`
* `genSeqNum()`
* `genSymbol()`
* `genTXAmount()`
* `genTXDescription()`
* `genTXMarket()`
* `genTXMeta()`
* `genWalletType()`

### Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
