'use strict'

process.env.DEBUG = '*'

const debug = require('debug')('bfx:api:mock-data')
const { genWalletUpdate, genHeartbeat } = require('../')

debug('hb: %j', genHeartbeat())
debug('wu: %j', genWalletUpdate())
debug('wu: %j', genWalletUpdate())
debug('wu: %j', genWalletUpdate())
debug('wu: %j', genWalletUpdate())
debug('wu: %j', genWalletUpdate())
