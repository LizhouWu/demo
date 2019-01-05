<template>
    <tabbar>
        <tabbar-item selected link="/home">
            <img slot="icon" src="../assets/images/icon_nav_button.png">
            <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/curriculum">
            <img slot="icon" src="../assets/images/icon_nav_msg.png">
            <span slot="label">课程</span>
        </tabbar-item>
        <tabbar-item link="/tree">
            <img slot="icon" src="../assets/images/icon_nav_msg.png">
            <span slot="label">家源树</span>
        </tabbar-item>
        <tabbar-item  link="/workbag">
            <img slot="icon" src="../assets/images/icon_nav_article.png">
            <span slot="label">魔法工具包</span>
        </tabbar-item>
        <tabbar-item link="/mine">
            <img slot="icon" src="../assets/images/icon_nav_cell.png">
            <span slot="label">我的</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vux'

    export default {
        components: {
            Tabbar,
            TabbarItem,
        }

    }
</script>

<style scoped lang="less">
    #app{
        .weui-tabbar{
            height: 50px;
            position: fixed;
        }
    }
</style>
