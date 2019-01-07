<template>
    <div>
        <!--<divider>定义bar固定宽度</divider>-->
        <tab :line-width="2" custom-bar-width="60px">
            <tab-item selected>奇迹30</tab-item>
            <tab-item>精品课</tab-item>
            <tab-item>精粹集锦</tab-item>
            <tab-item>更多</tab-item>
        </tab>
        <!--<swiper v-model="index" height="100px" :show-dots="false">
            <swiper-item v-for="(item, index) in list2" :key="index">
                <div class="tab-swiper vux-center">{{item}} Container</div>
            </swiper-item>
        </swiper>-->

        <!--<div>
            <tab :line-width=2 active-color='#fc378c' v-model="index">
                <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
            </tab>
            <swiper v-model="index" height="100px" :show-dots="false">
                <swiper-item v-for="(item, index) in list2" :key="index">
                    <div class="tab-swiper vux-center">{{item}} Container</div>
                </swiper-item>
            </swiper>
        </div>-->
    </div>
</template>

<script>
    import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem,Scroller } from 'vux'
    const list = () => ['精选', '美食', '电影', '酒店', '外卖']

    export default {
        components: {
            Tab,
            TabItem,
            Sticky,
            Divider,
            XButton,
            Swiper,
            SwiperItem,
            Scroller
        },
        data () {
            return {
                index01: 0,
                list2: list(),
                demo2: '美食',
                list3: ['收到的消息', '发出的消息'],
                demo3: '收到的消息',
                list4: ['正在放映', '即将上映'],
                demo4: '即将上映',
                demoDisabled: 'A',
                index: 0,
                getBarWidth: function (index) {
                    return (index + 1) * 22 + 'px'
                }
            }
        },
        methods: {
            switchTabItem (index) {
                console.log('on-before-index-change', index)
                this.$vux.loading.show({
                    text: 'loading'
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                    this.index01 = index
                }, 1000)
            },
            onItemClick (index) {
                console.log('on item click:', index)
            },
            addTab () {
                if (this.list2.length < 5) {
                    this.list2 = list().slice(0, this.list2.length + 1)
                }
            },
            removeTab () {
                if (this.list2.length > 1) {
                    this.list2 = list().slice(0, this.list2.length - 1)
                }
            },
            next () {
                if (this.index === this.list2.length - 1) {
                    this.index = 0
                } else {
                    ++this.index
                }
            },
            prev () {
                if (this.index === 0) {
                    this.index = this.list2.length - 1
                } else {
                    --this.index
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/center.less';

    .box {
        padding: 15px;
    }
    .active-6-1 {
        color: rgb(252, 55, 140) !important;
        border-color: rgb(252, 55, 140) !important;
    }
    .active-6-2 {
        color: #04be02 !important;
        border-color: #04be02 !important;
    }
    .active-6-3 {
        color: rgb(55, 174, 252) !important;
        border-color: rgb(55, 174, 252) !important;
    }
    .tab-swiper {
        background-color: #fff;
        height: 100px;
    }

    /* scroll */
    .box1 {
        height: 100px;
        position: relative;
        width: 1490px;
    }
    .box1-item {
        width: 200px;
        height: 100px;
        background-color: #ccc;
        display:inline-block;
        margin-left: 15px;
        float: left;
        text-align: center;
        line-height: 100px;
    }
    .box1-item:first-child {
        margin-left: 0;
    }
    .box2-wrap {
        height: 300px;
        overflow: hidden;
    }
</style>
