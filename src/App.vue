<template>
    <div id="app">
        <router-view></router-view>

        <!-- 底部 vTabbar -->
        <vTabbar></vTabbar>
    </div>
</template>

<script>
    import vTabbar from "./components/vTabbar.vue"  // 引入vTabbar_底部切换组件
    export default {
        name: 'app',
        components: {
            vTabbar,
        },
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    body{
        background-color: #fbf9fe;
        font-size: 12px;
    }
    #app{
        margin-bottom: 70px;
        background-color: #f5f5f5;
        min-height: 100%;
        font-size: 12px;
        font-family: 'Helvetica', Helvetica, Arial, sans-serif;
    }
</style>
