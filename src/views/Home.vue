<template>
    <div class="home-container">
        <!-- 搜索 -->
        <vSearch></vSearch>
        <!-- 轮播图 -->
        <div class="slide">
            <vSwiper :lunbotuList="lunbotuList"
                   :swiperHeight="swiperHeight">
            </vSwiper>
        </div>

        <!-- 新生必读 -->
        <div class="newStudent">
            <h2>新生必读</h2>
            <scroller lock-y :scrollbar-x=false>
                <div class="box1">
                    <div class="box1-item" v-for="i in 7">
                        <!--<span>{{' ' + i + ' '}}</span>-->
                        <a href="" class="img">
                            <img src="../assets/images/img.png" alt="">
                        </a>
                        <div class="inf">
                            <span class="title">标题这是一个标题，一个标题标题这是一个标题，一个标题</span>
                            <span class="desc">最值得学习的商业课程</span>
                            <span class="price">￥360.00</span>
                        </div>
                    </div>
                </div>
            </scroller>
        </div>
       <!-- <h2>新生必读</h2>
        <vScroller></vScroller>-->

        <!-- 课程 -->
        <vTab></vTab>
        <vScroller></vScroller>

        <!-- 现场课 -->
        <div class="title">
            <h2>现场课</h2>
            <span>更多</span>
        </div>
        <CardClass ></CardClass>

        <div class="newStudent">
            <div class="title">
                <h2>导师团队</h2>
                <span>更多</span>
            </div>
            <scroller lock-y :scrollbar-x=false>
                <div class="box1">
                    <div class="box1-item" v-for="i in 7">
                        <!--<span>{{' ' + i + ' '}}</span>-->
                        <a href="" class="img">
                            <img src="../assets/images/img.png" alt="">
                        </a>
                        <div class="inf">
                            <span class="title">标题这是一个标题，一个标题标题这是一个标题，一个标题</span>
                            <span class="desc">最值得学习的商业课程</span>
                            <span class="price">￥360.00</span>
                        </div>
                    </div>
                </div>
            </scroller>
        </div>

        <!-- 周边产品 -->
        <div class="title">
            <h2>周边产品</h2>
            <span>更多</span>
        </div>
        <CardClass></CardClass>

    </div>
</template>

<script>


    import vSwiper from "../components/vSwiper.vue"
    import CardClass from "../components/CardClass.vue"
    import vTab from "../components/vTab.vue"
    import vScroller from "../components/vScroller.vue"
    import vSearch from "../components/vSearch.vue"

    import { Scroller } from 'vux'

    const list = () => ['奇迹30', '精品课', '精粹集锦']
    export default {
        components: {
            vSwiper,
            CardClass,
            Scroller,
            vTab,
            vScroller,
            vSearch
        },
        data() {
            return {
                swiperItemIndex: 1,     // 轮播图数据
                lunbotuList: [
                    {
                        url: 'javascript:',
                        // img: 'https://static.vux.li/demo/5.jpg', // 404
                        // title: '送你一次旅行',
                        fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
                    }, {
                        url: 'javascript:',
                        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
                        // title: '送你一朵fua'
                    }, {
                        url: 'javascript:',
                        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
                        // title: '送你一辆车'
                    }
                ],
                swiperHeight: "190px",
                results: [],        // 顶部工具条数据
                value: 'test',

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

<style scoped lang="less">
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/center.less';
    /* 轮播图 */
    .slide{
        /*margin-bottom: .2rem;*/
    }

    /* 新生必读 */
    .newStudent{
        h2{
            color: #F74E15;
            font-weight: 700;
            padding-left: .1rem;
            font-size: 14px;
        }
        .box1{
            width: 5000px;
            .box1-item{
                display: flex;
                flex-direction: row;
                width: 2.6rem;
                /*height: 150px;*/
                height: 1.1rem;
                text-align: left;
                margin: .1rem;
                padding: .1rem;
                background-color: #fff;
                box-shadow: .03rem .02rem .03rem #CCC;
                .img{
                    width: 2.9rem;
                    img{
                        width: 100%;
                        margin: 0 auto;
                    }
                }
                .inf{
                    /*width: 70px;*/
                    display: flex;
                    flex-direction: column;
                    line-height: 20px;
                    padding: 0 .1rem;
                    .title{
                        font-weight: 700;
                        color: #383838;
                        font-size: 14px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        overflow:hidden;
                        /*! autoprefixer: off */
                        -webkit-box-orient: vertical;

                    }
                    .desc{
                        overflow:hidden;//超出的隐藏
                        text-overflow:ellipsis;//省略号
                        white-space:nowrap;//强制一行显示
                        line-height: 28px;

                    }
                    .price{
                        color: #d24d24;
                        /*font-weight: 600;*/
                        font-size: 16px;
                    }
                }
            }
        }

    }

    /* 现场课 */
    .course {
        .grid-center {
            .name {
                text-align: left;
                font-weight: 600;
                color: #2A2A2A;
            }
            .info {
                display: flex;
                justify-content: space-between;

                .price {
                    color: #DD7D5F;
                }
            }
        }
    }

    /* 公共标题 */
    .title{
        display: flex;
        padding: 0 .15rem;
        font-weight: normal;
        justify-content: space-between;
        align-items: center;
        height: .4rem;

        h2{
            font-weight: normal;
            font-size: 14px;
        }
        span{
            font-size: 12px;
        }
    }

    .tabClass{
        .vux-center{
            padding: 10px 0 10px 10px;
            display: flex;

        }
        .tabClass-container{
            flex:1 1 600px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            overflow: auto;
            width: 100%;
            /*flex-grow:2;*/
            overflow-x: auto;
            white-space: nowrap;

            width: 100%;
            .tab-img{
                /*width: 60px;*/
                img{
                    width: 100%;
                }
            }
        }
    }


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
    .tabClass{
        .more{
            line-height: 44px;
            width: 20%;
        }
        .vux-tab-disabled{
            color: pink;
            width: 20%;
        }
        .vux-tab-container{
            .vux-tab{
                width: 90%;
            }
        }

    }
    .vux-tab .vux-tab-item.vux-tab-disabled{
        color: red;
        width: 20%;
        font-size: 10px;
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
