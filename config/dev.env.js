'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    MOCK: 'true',   // 开发环境使用mock.js模拟数据
})
