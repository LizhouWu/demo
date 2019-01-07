<template>
    <div id="app">
        <router-view></router-view>

        <!-- 底部 vTabbar -->
        <vTabbar v-if="$store.state.showTabbar"></vTabbar>
    </div>
</template>

<script>
    import vTabbar from "./components/vTabbar.vue"  // 引入vTabbar_底部切换组件
    export default {
        name: 'app',
        components: {
            vTabbar,
        },
        created(){
            this.$store.state.showTabbar = true
            console.log(this.$store.state.showTabbar)
        },
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    body{
        background-color: #f5f5f5;
        font-size: 12px;
        /*font-family: PingFangSC-Medium;*/
        font-family: PingFangSC-Medium;
<<<<<<< HEAD
        max-width: 750px;
        margin:0 auto;
=======
>>>>>>> 3bea29e56f3d9a16e105fa74b3f45a5eaa2505fa
    }
    #app{
        margin-bottom: 90px;
        min-height: 100%;
    }
    i{
        font-style: normal;
    }
</style>
