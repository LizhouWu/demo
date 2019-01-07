<template>
    <tabbar refs="tabbar" v-show="!''">
        <tabbar-item selected link="/home">
            <img slot="icon" src="../assets/images/tabbar-home.png">
            <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/curriculum">
            <img slot="icon" src="../assets/images/tabbar-class.png">
            <span slot="label">课程</span>
        </tabbar-item>
        <tabbar-item link="/tree" class="tree" >
            <img slot="icon" src="../assets/images/tabbar-tree.png" >
            <span slot="label">家源树</span>
        </tabbar-item>
        <tabbar-item  link="/workbag">
            <img slot="icon" src="../assets/images/tabbar-workbag.png">
            <span slot="label">魔法工具包</span>
        </tabbar-item>
        <tabbar-item link="/mine">
            <img slot="icon" src="../assets/images/tabbar-mine.png">
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
            height: .5rem;
            position: fixed;
        }
        .weui-tabbar__item{
            .weui-tabbar__icon{
                display: inline-block;
                width: .23rem !important;
                height: .23rem !important;
            }
        }

        .weui-tabbar__icon img{
            display: inline;
            width: .23rem;
            height: .23rem;
        }
        .tree{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            font-size: 0;
            color: #999999;
            text-align: center;
            margin-top: -14px;
            background:  url("../../src/assets/images/tree-bg.png") no-repeat top center;
            background-size: .5rem;
            position: relative;
            z-index: 200;
            img{
                display: inline-block;
                width: .4rem;
                height: .35rem;
                margin-top: -.02rem;
            }
            .weui-tabbar__label{

            }
        }

    }
</style>
