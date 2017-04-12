#!/usr/bin/env node

/**
 * Share this project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const pkg = require('../package.json')

apeTasking.runTasks('share', [
  () => apeTasking.execcli('hub', [ 'init' ]),
  () => apeTasking.execcli('hub', [ 'create', { p: false, d: pkg.description }, pkg.repository ]),
  () => apeTasking.execcli('travis', [ 'enable', { r: pkg.repository } ])
], true)
