import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);  // 使用vuex

const state = {
    showTabbar : true   // tabbar 显示隐藏
}

export default new Vuex.Store({     // 暴露仓库
    state
})
