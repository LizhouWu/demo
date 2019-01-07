<template>
    <div class="home-container">
        <!-- 搜索 -->
        <div class="search-container">
            <div class="server">
                <img src="../assets/images/icon-server.png" alt="">
                客服
            </div>
            <div class="search">
                <input type="search" name="search" placeholder="搜索课程或导师">
            </div>
            <div class="other">
                <img class="class" src="../assets/images/icon-class.png" alt="">
                <img class="message" src="../assets/images/icon-message.png" alt="">
            </div>
        </div>

        <!-- 轮播图 -->
        <div class="slide">
            <vSwiper :lunbotuList="lunbotuList"
                   :swiperHeight="swiperHeight">
            </vSwiper>
        </div>

        <!-- 新生必读 -->
        <div class="newStudent">
            <h2>新生必读</h2>
            <scroller lock-y :scrollbar-x=false >
                <div class="box1" ref="newStudentWidth" id="newStudentWidth">
                    <div class="box1-item newBoxitem" v-for="i in 2" ref="newBoxitem">
                        <!--<span>{{' ' + i + ' '}}</span>-->
                        <a href="" class="img">
                            <img src="../assets/images/img.png" alt="">
                        </a>
                        <div class="inf">
                            <span class="title">灵商密码 成都场灵商密码 成都场</span>
                            <span class="desc">最值得学习的商业课程</span>
                            <span class="price">￥360.00</span>
                        </div>
                    </div>
                </div>
            </scroller>
        </div>

        <!-- 课程 -->
        <div class="class">
            <vTab></vTab>
            <scroller lock-y :scrollbar-x=false>
                <div class="box1">
                    <div class="box1-item" v-for="i in 7">
                        <!--<span>{{' ' + i + ' '}}</span>-->
                        <a href="" class="img">
                            <img src="../assets/images/img.png" alt="">
                        </a>
                        <div class="inf">
                            <span class="title">灵商密码 成都场灵商
密码 成都场</span>
                            <span class="desc">最值得学习的商业课程</span>
                            <span class="price">￥360.00</span>
                        </div>
                    </div>
                </div>
            </scroller>
        </div>



        <!-- 现场课 -->
        <div class="site-class-container">
            <div class="title">
                <h2>现场课</h2>
                <span>更多</span>
            </div>
            <scroller lock-y :scrollbar-x=false>
                <div class="box1" id="siteWidth">
                    <div class="box1-item" v-for="i in 7" ref="siteItem">
                        <!--<span>{{' ' + i + ' '}}</span>-->
                        <a href="" class="img">
                            <img src="../assets/images/1.png" alt="">
                        </a>
                        <div class="site-inf">
                            <span class="site-title">奇迹30 前端请注意排序 01</span>
                            <div class="inf">
                                <span class="price">￥360.00</span>
                                <span class="time">2019-02-23</span>
                            </div>
                        </div>
                    </div>
                </div>
            </scroller>
        </div>

        <!-- 导师团队 -->
        <div class="mentor-container">
            <div class="title">
                <h2>导师团队</h2>
                <span>更多</span>
            </div>
            <scroller lock-y :scrollbar-x=false>
                <div class="box1" id="mentorWidth">
                    <div class="box1-item" v-for="i in 7" ref="mentorItem">
                        <!--<span>{{' ' + i + ' '}}</span>-->
                        <div class="mentor-photo">
                            <a href="#">
                                <img src="../assets/images/photo.jpg" alt="">
                            </a>
                            <div class="mentor-name">凤凰娴</div>
                        </div>
                        <div class="mentor-inf">奇迹30创始人，国内知名
                            导师奇迹30创始人奇迹30创始人，国内知名…</div>
                    </div>
                </div>
            </scroller>
        </div>

        <!-- 周边产品 -->
        <div class="cartoon-container">
            <div class="title">
                <h2>周边产品</h2>
                <span>进入商城</span>
            </div>
            <CardClass></CardClass>
        </div>


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
        created(){
            this.$store.state.showTabbar = true
            console.log(this.$store.state.showTabbar)
        },
        data() {
            return {
                swiperItemIndex: 1,     // 轮播图数据
                lunbotuList: [
                    {
                        url: 'javascript:',
                        // img: require("../../assets/images/banner01.jpg")
                        img:"http://39.105.41.102:8000/dev/jiayuanshu-frontend/raw/master/src/assets/images/banner01.png",
                    }, {
                        url: 'javascript:',
                        img:"http://39.105.41.102:8000/dev/jiayuanshu-frontend/raw/master/src/assets/images/banner02.png",
                    }, {
                        url: 'javascript:',
                        img:"http://39.105.41.102:8000/dev/jiayuanshu-frontend/raw/master/src/assets/images/banner03.png",
                    }
                ],
                swiperHeight: "1.65rem",
                results: [],        // 顶部工具条数据
                value: 'test',
                "msg": "nihao",

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
        },
        mounted(){
           var _this = this;

            setTimeout(() => {
               /* const heightA = window.getComputedStyle(this.$refs.header).height;
                console.log("heightA ==> "+heightA);*/
                const newBoxitemLength = _this.$refs.newBoxitem.length;       // 2
                console.log(newBoxitemLength)
                const newBoxItemWidth = _this.$refs.newBoxitem[0].offsetWidth;    // 250
                console.log(newBoxItemWidth)
                document.getElementById("newStudentWidth").style.width = 530 + "px";
            }, 1000);



            this.$nextTick(()=>{
                //写你操作dom的代码
                // document.getElementById("newStudentWidth").style.width = (newBoxitemLength*newBoxItemWidth+newBoxitemLength*15 + 50)/100 + "rem";
            })



          /*  // 导师团队
            let mentorItemLength = _this.$refs.newBoxitem.length;       // 7
            // console.log(mentorItemLength)
            document.getElementById("mentorWidth").style.width = newBoxitemLength* 150 + 7*10 +50 + "px";

            // 现场课
            let siteItemLength = _this.$refs.siteItem.length;       // 7
            // console.log(Math.round(siteItemLength/2))
            document.getElementById("siteWidth").style.width = Math.round(siteItemLength/2) * 200 + 7*10 + "px";*/
        }
    }
</script>

<style scoped lang="less">
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/center.less';

    /* 搜索栏 */
    .search-container{
        display: flex;
        flex-direction: row;
        padding: 0 .15rem;
        height: .5rem;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        .server{
            width: .7rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 14px;
            color: #EF4D1B;
            img{
                width: .25rem;
                height: .18rem;
                padding-right: .05rem;
            }
        }
        .search{
            width: 2rem;
            margin: 0 .15rem 0 .1rem;
            input{
                width: 2.03rem;
                height: .3rem;
                background: #EEEEEE;
                border-radius: 30px;
                padding: 0 .1rem;
                font-size: 14px;
                color: #888888;
            }
        }
        .other{
            width: .6rem;
            display: flex;
            justify-content: space-between;
            .class{
                display: inline-block;
                width: .2rem;
                height: .2rem;
            }
            .message{
                display: inline-block;
                width: .24rem;
                height: .21rem;
            }
        }
    }

    /* 新生必读 */
    .newStudent{
        height: 1.88rem;
        /*background-color: pink;*/
        padding: .25rem .15rem;
        h2{
            font-size: 18px;
            color: #EF4D1B;
            line-height: .18rem;
            font-weight: 600;
            margin-bottom: .2rem;
        }
        .box1{
            width: 2600px;
            height: 1.2rem !important;
            .box1-item{
                display: flex;
                flex-direction: row;
                width: 2.5rem;
                height: 1.05rem;
                text-align: left;
                padding: .15rem;
                background: #FFFFFF;
                box-shadow: 0 .02rem .08rem 0 #E5E5E5;
                border-radius: .02rem;
                .img{
                    width: .75rem;
                    height: .75rem;
                    margin-right: .1rem;
                    img{
                        width: .75rem;
                        height: .75rem;
                    }
                }
                .inf{
                    /*width: 70px;*/
                    width: 1.34rem;
                    display: flex;
                    flex-direction: column;
                    line-height: .2rem;
                    /*padding: 0 .1rem;*/
                    .title{
                        font-weight: 700;
                        font-size: 14px;
                        color: #333333;
                        line-height: .18rem;
                        /*height:.36rem;*/
                        overflow: hidden;
                        padding: 0 ;
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
                        font-size: 12px;
                        color: #888888;
                        line-height: .12rem;
                        height: .12rem;
                        margin-bottom: .05rem;
                    }
                    .price{
                        font-size: 14px;
                        color: #EF4D1B;
                        line-height: .14rem;
                    }
                }
            }
        }
        .vux-tab-item{
            font-size: 18px;
            color: #888888;
            line-height: 18px;
            font-weight: 600;
        }
    }

    /* 课程 */
    .class{
        height: 1.94rem;
        /*padding: 0 0.15rem;*/
        /*background-color: pink;*/
        .box1{
            width: 2600px;
            height: 1.2rem !important;
            margin: .2rem 0 0 .15rem;
            .box1-item{
                display: flex;
                flex-direction: row;
                width: 2.5rem;
                height: 1.05rem;
                text-align: left;
                padding: .15rem;
                background: #FFFFFF;
                box-shadow: 0 .02rem .08rem 0 #E5E5E5;
                border-radius: .02rem;
                .img{
                    width: .75rem;
                    height: .75rem;
                    margin-right: .1rem;
                    img{
                        width: .75rem;
                        height: .75rem;
                    }
                }
                .inf{
                    /*width: 70px;*/
                    width: 1.34rem;
                    display: flex;
                    flex-direction: column;
                    line-height: .2rem;
                    /*padding: 0 .1rem;*/
                    .title{
                        font-weight: 700;
                        font-size: 14px;
                        color: #333333;
                        line-height: .18rem;
                        /*height:.36rem;*/
                        overflow: hidden;
                        padding: 0 ;
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
                        font-size: 12px;
                        color: #888888;
                        line-height: .12rem;
                        height: .12rem;
                        margin-bottom: .05rem;
                    }
                    .price{
                        font-size: 14px;
                        color: #EF4D1B;
                        line-height: .14rem;
                    }
                }
            }
        }
        .vux-tab-item{
            font-size: 18px;
            color: #888888;
            line-height: 18px;
            font-weight: 600;
        }
    }

    /* 现场课 */
    .site-class-container{
        width: 1000px;
        .title{
            height: .45rem;
            line-height: .45rem;
            padding: 0 .15rem;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #DEDEDE;
            h2{
                font-size: 18px;
                color: #333333;
                line-height: 18px;
                font-weight: 600;
            }
            span{
                font-size: 14px;
                color: #888888;
                line-height: 14px;
            }
        }
        .box1{
            width: 850px;
            height: 3.8rem !important;
            margin: .15rem 0 0 .15rem;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            padding-right: .15rem;
            .box1-item{
                display: flex;
                flex-direction: column;
                width: 2rem;
                height: 1.75rem;
                line-height: .14rem;
                text-align: left;
                /*padding: .15rem;*/
                background: #FFFFFF;
                box-shadow: 0 .02rem .08rem 0 #E5E5E5;
                border-radius: .02rem;
                margin: 0;
                margin-bottom: .15rem;
                .img{
                    width: 2rem;
                    height: 1.2rem;
                    img{
                        width: 2rem;
                        height: 1.2rem;
                    }
                }
                .site-inf{
                    padding: .1rem .15rem 0;
                    .site-title{
                        font-size: 14px;
                        color: #333333;
                        line-height: .16rem;
                        font-weight: 600;
                        display: inline-block;
                        width: 1.67rem;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    .inf{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        margin-top: .05rem;
                        .price{
                            font-size: 14px;
                            color: #EF4D1B;
                            line-height: .14rem;
                        }
                        .time{
                            font-size: 12px;
                            color: #888888;
                            line-height: .12rem;
                        }
                    }
                }
            }
        }
    }

    /* 导师团队 */
    .mentor-container{
        height: 1.98rem;
        /*background-color: pink;*/
        margin-top: .2rem;
        .title{
            height: .45rem;
            line-height: .45rem;
            padding: 0 .15rem;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #DEDEDE;
            h2{
                font-size: 18px;
                color: #333333;
                line-height: 18px;
                font-weight: 600;
            }
            span{
                font-size: 14px;
                color: #888888;
                line-height: 14px;
            }
        }
        .box1{
            margin: .2rem 0 0 .15rem;
            height: 1.2rem !important;
            .box1-item{
                width: 1.5rem;
                height: 1.12rem;
                background: #FFFFFF;
                box-shadow: 0 .02rem .08rem 0 #E5E5E5;
                border-radius: .02rem;
                .mentor-photo{
                    height: .6rem;
                    border-bottom: 1px solid #DEDEDE;
                    display: flex;
                    flex-direction: row;
                    /*justify-content: center;*/
                    align-items: center;
                    padding-left: .15rem;
                    a{
                        img{
                            display: inline-block;
                            width: .3rem;
                            height: .3rem;
                            border-radius: 50%;
                            vertical-align: middle;
                        }
                    }
                    .mentor-name{
                        font-size: 14px;
                        color: #333333;
                        line-height: 14px;
                        padding-left: .15rem;
                        font-weight: 600;
                    }
                }
                .mentor-inf{
                    font-size: 12px;
                    color: #888888;
                    line-height: 16px;
                    padding: 0 .05rem;
                    margin-top: .05rem;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }

    /* 周边产品 */
    .cartoon-container{
        .title{
            background-color: #fff;
            border-bottom: none;
        }
    }





    /* 公共标题 */
    .title{
        display: flex;
        padding: 0 .15rem;
        font-weight: normal;
        justify-content: space-between;
        align-items: center;
        height: .45rem;
        line-height: .45rem;
        /*border-bottom: 1px solid #DEDEDE;*/

        h2{
            font-size: 18px;
            color: #333333;
            line-height: .18rem;
            font-weight: 600;
        }
        span{
            font-size: 14px;
            color: #888888;
            line-height: .14rem;
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
