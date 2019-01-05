import Vue from 'vue'
import Router from 'vue-router'

// 引入 vTabbar 组件
import Home from "../views/Home.vue"
import Curriculum from "../views/Curriculum.vue"
import Tree from "../views/Tree.vue"
import Workbag from "../views/Workbag.vue"
import Mine from "../views/Mine.vue"

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/",redirect: "/home" },
    { path: "/home",component:Home },
    { path: "/curriculum",component:Curriculum },
    { path: "/tree",component:Tree },
    { path: "/workbag",component:Workbag },
    { path: "/mine",component:Mine },
  ],
  linkActiveClass : 'active-on'
})
