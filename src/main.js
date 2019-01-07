// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import store from './store'     // 引入vuex store仓库

import "../src/assets/css/public.less"

FastClick.attach(document.body)
Vue.config.productionTip = false

process.env.MOCK && require('@/mock')    // 引入mock.js 模拟数据

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-box')
