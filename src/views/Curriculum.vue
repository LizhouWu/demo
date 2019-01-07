<template>
    <div class="Curriculum-container">
        <!-- 轮播图 -->
        <div class="slide" ref="slide">
            <vSwiper :lunbotuList="lunbotuList"
                     :swiperHeight="swiperHeight">
            </vSwiper>
            <i class="icon-popularize" @click="shareFlag = !shareFlag"></i>
        </div>

        <!-- 课程信息 -->
        <div id="class-container" >
            <h2>奇迹30 第29班</h2>
            <div class="intro">简介：假如我是一片枯叶被你浮起，假如我是能和你飞跑的云雾，是一个波浪，和你的威力同喘息，假如我分有你的脉搏，仅仅不如你那么自由，哦，无法约束的生命！
            </div>
            <div class="line"></div>
            <div class="sign-up">
                <p class="sign-up-time">报名：2019-12-23</p>
                <p class="sign-up-fee">费用：&nbsp;&nbsp;<i class="price">￥360.00</i>&nbsp;&nbsp;（新训）</p>
            </div>
            <div class="class">
                <div class="class-start">
                    <span class="class-start-time">开课：2019-03-23 15:00</span>
                    <span class="class-time">28课时</span>
                </div>
                <div class="class-study">
                    <span>234人正在学习</span>
                    <div class="img-list">
                        <img src="../assets/images/photo.jpg" alt="" style="width:30px;height: 30px">
                        <img src="../assets/images/photo.jpg" alt="" style="width:30px;height: 30px">
                        <img src="../assets/images/photo.jpg" alt="" style="width:30px;height: 30px">
                    </div>
                </div>
            </div>
        </div>

        <!-- tab切换 -->
        <div class="tab-container">
            <tab :line-width=2 active-color='#ee6723' v-model="index">
                <tab-item class="vux-center"
                          :selected="demo2 === item"
                          v-for="(item, index) in list2"
                          @click="demo2 = item"
                          :key="index"
                          >{{item}}</tab-item>
            </tab>
            <swiper v-model="index" height="1000px"  :show-dots="false" ref="swiperheight">
                <swiper-item v-for="(item, index) in list2" :key="index">
                    <div class="tab-swiper vux-center">
                        <!--{{item}} Container-->
                        <!-- 详情 -->
                        <div v-if="index==0" class="details-container" ref="detailscontainer">
                            <!--这里排版随意布局，无限制-->
                            浪花愈大 <br>
                            凝立的磐石<br>
                            在沉默的持守里<br>
                            快乐也愈大了。<br>

                            命运如同海风——<br>
                            吹着青春的舟<br>
                            飘摇的<br>
                            曲折的<br>
                            渡过了时间的海。<br>

                            沉默着罢！<br>
                            在这无穷的世界上<br>
                            弱小的我<br>
                            原只当微笑<br>
                            不应放言。<br><br>

                            <img src="../assets/images/photo.jpg" alt="" style="width:100%">

                        </div>
                        <!-- 导师 -->
                        <div v-if="index==1" class="teacher-container" ref="teacher-container">
                            <div class="teacher-item" v-for="item in 10">
                                <a class="teacher-photo">
                                    <img src="../assets/images/photo.jpg" alt="" style="width: .4rem">
                                </a>
                                <div class="teacher-wrap">
                                    <div class="teacher-inf">
                                        <div class="teacher-name">
                                            <div class="name">凤凰娴</div>
                                            <div class="tag">专业导师</div>
                                        </div>
                                        <a class="more">了解更多</a>
                                    </div>
                                    <div class="teacher-content">
                                        怎么独自站在河边上？这朦胧的天色，是黎明还是黄昏？何处寻问，只觉得眼前竟是花的世界。中间杂着几朵白蔷薇。
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 直播间 -->
                        <div v-if="index==2" class="rate-container" ref="rate-container">
                            <div class="rate">
                                <div class="rate-inf">
                                    <span>你已听2讲</span>
                                    <span>共28讲</span>
                                </div>
                                <div class="class-rate"></div>
                            </div>
                            <div class="class-container">
                                <div class="class-item" v-for="item in 5">
                                    <div class="class-inf">
                                        <span class="class-num">第001讲 </span>
                                        <span class="class-name">《在春天花开的日子里》</span>
                                    </div>
                                </div>
                                <div class="class-item" >
                                    <div class="class-inf">
                                        <span class="class-num">第001讲 </span>
                                        <span class="class-name">《在春天花开的日子里在春天花开的日子里在春天花开的日子里》</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-item>
            </swiper>
        </div>

        <!-- 底部 -->
        <div class="footer">
            <router-link tag="div" to="/home" class="back">
                <img class="iBack" src="../assets/images/iBack.png">返回
            </router-link>
            <div class="advisory">
                <img class="iAdvisory" src="../assets/images/iAdvisory.png">我的咨询
            </div>
            <div class="buy">立即购买</div>
        </div>

        <!-- 推广课程 -->
        <div class="share-container" v-show="shareFlag">
            <h2>将推广图片分享到微信</h2>
            <div class="share-info">
                <img src="../assets/images/share.png" alt="" class="share-img">
                <img src="../assets/images/photo.jpg" alt="" class="photo">
                <p class="name">王晓鹿</p>
                <p class="class-study">正在学习<span>《奇迹30 无与伦比》</span>课程</p>
                <a class="weixin-code">
                    <img src="../assets/images/weixin-code.png" alt="">
                </a>
                <p class="code-tip">长按扫码二维码，与我一起学</p>
                <i class="close-share" @click="shareFlag = !shareFlag"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import vSwiper from "../components/vSwiper"

    import { Card,Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
    const list = () => ['详情', '导师', '直播间']

    export default {
        components: {
            vSwiper,

            Card,
            Swiper,
            SwiperItem,
            Tab,
            TabItem
        },
        data() {
            return {
                swiperItemIndex: 1,     // 轮播图数据
                swiperHeight: "1.65rem",
                lunbotuList: [
                    {
                        url: 'javascript:',
                        img:"http://39.105.41.102:8000/dev/jiayuanshu-frontend/raw/master/src/assets/images/banner01.png",
                    }, {
                        url: 'javascript:',
                        img:"http://39.105.41.102:8000/dev/jiayuanshu-frontend/raw/master/src/assets/images/banner02.png",
                    }, {
                        url: 'javascript:',
                        img:"http://39.105.41.102:8000/dev/jiayuanshu-frontend/raw/master/src/assets/images/banner03.png",
                    }
                ],
                height: "1000px",
                shareFlag:false,




                index01: 0,
                list2: list(),
                demo2: '精选',
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
        created(){
            this.$store.state.showTabbar = false
            console.log(this.$store.state.showTabbar)
        },
        methods: {
           /* // 分享课程的显示和隐藏
            shareFlag(){
                this.shareFlag = !shareFlag;
            },*/


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
            // var _this = this;
            //
            // let slideHeight = _this.$refs.slide.offsetHeight;
            // console.log(slideHeight)
            //
            // var heightCss = window.getComputedStyle(this.$refs.slide).height; // ？px
            // console.log(heightCss)
            //
            // // _this.$refs.swiperheight.style.height = 1200 + "px";
            // this.$nextTick(function(){
            //     _this.$refs.swiperheight.height = 1200 + "px";
            // })

            // let

        },
        computed: {

        }
    }
</script>

<style scoped lang="less">

    /* card */
    .card-demo-flex {
        display: flex;
    }

    .card-demo-content01 {
        padding: 10px 0;
    }

    .card-padding {
        padding: 15px;
    }

    .card-demo-flex > div {
        flex: 1;
        text-align: center;
        font-size: 12px;
    }

    .card-demo-flex span {
        color: #f74c31;
    }

    /* tab */
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
        padding: .2rem 4%;
        background-color: #fff;
        /*height: 100px;*/
    }
    /* 轮播图 */
    .slide{
        position: relative;
        width: 100%;
        overflow: hidden;
        .icon-popularize{
            position: absolute;
            right: -.1rem;
            top: .15rem;
            display: inline-block;
            width: .97rem;
            height: .25rem;
            background-color: pink;
            background:url("../assets/images/icon-popularize.png") no-repeat;
            background-size: .97rem .25rem;
        }
    }

    /* 课程信息 */
    #class-container{
        padding: 4%;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding-bottom: .50rem;
        margin-bottom: .66rem;
        position: relative;
        h2{
            font-size: 22px;
            line-height: 22px;
            color: #333333;
            font-weight: 600;
            margin-bottom: .26rem;
            margin-top: .1rem;
        }
        .intro{
            font-size: 14px;
            color: #888888;
            line-height: 18px;
            margin-bottom: .1rem;
        }
        .line{
            width: 100%;
            height: 1px;
            background: #DEDEDE;
        }
        .sign-up{
            padding: .1rem 0;
            display: flex;
            flex-direction: column;
            font-size: 14px;
            color: #888888;
            line-height: 22px;
            .sign-up-time{
            }
            .sign-up-fee{
                .price{
                    font-size: 14px;
                    color: #EE6723;
                    line-height: 22px;
                    font-weight: 600;
                }
            }
        }
        .class{
            height: 1rem;
            line-height: .5rem;
            box-shadow: 0 2px 8px 0 #E5E5E5;
            border-radius: 2px;
            font-size: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 .1rem;
            border-top: 2px solid #999999;
            position: absolute;
            left: 4%;
            right: 4%;
            bottom: -.5rem;
            background: #fff;
            .class-start{
                border-bottom: 1px solid #ccc;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 16px;
                color: #333333;

            }
            .class-study{
                display: flex;
                flex-direction: row;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{

                }
                .img-list{
                    font-size: 0;
                    &>img{
                        vertical-align: middle;
                        display: inline-block;
                        width: .3rem;
                        height: .3rem;
                        font-size: 0;
                        border-radius: 50%;
                        margin-left:-10px;
                        border:1px solid #fff;
                    }
                }
            }
        }
        .class-start-time{}
        .class-time{}
    }

    .tab-swiper{
        padding: 0rem 4%;
    }

    /* 详情 */
    .details-container{
        font-size: 14px;
        color: #333333;
        text-align: center;
        padding-top: .2rem;
    }

    /* 导师 */
    .teacher-container{
        padding-top: .1rem;
        .teacher-item{
            display: flex;
            flex-direction: row;
            width: 92%;
            margin: 6% 0% 0;
            padding-bottom: 6%;
            border-bottom: 1px solid #DEDEDE;;
            .teacher-photo{
                display: inline-block;
                width: .7rem;
                /*background-color: pink;*/
                width: .4rem;
                height: .4rem;
                margin-right: 4%;
                img{
                    width: 100%;
                    border-radius: 50%;
                }
            }
            .teacher-wrap{
                flex: 1 1 auto;
                .teacher-inf{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    .teacher-name{
                        margin-bottom: .1rem;
                        .name{
                            font-size: 16px;
                            color: #333333;
                            line-height: 32px;
                            font-weight: 600;
                        }
                        .tag{
                            font-size: 12px;
                            color: #333333;
                            text-align: center;
                            line-height: 24px;
                        }
                    }
                    .more{
                        font-size: 14px;
                        color: #888888;
                        text-align: right;
                        line-height: 28px;
                    }

                }
                .teacher-content{
                    font-size: 14px;
                    color: #888888;
                }
            }


        }

    }

    /* 直播间 */
    .rate-container{
        width: 100%;
        padding-top: .2rem;
        .rate{
            background: #F9F9F9;
            border: 1px solid #DEDEDE;
            border-radius: 4px;
            margin-bottom: .1rem;

            .rate-inf{
                height: .4rem;
                line-height: .4rem;
                padding: 0 .1rem;

                display: flex;
                justify-content: space-between;
                span{
                    font-size: 14px;
                    color: #333333;
                }
            }
            .class-rate{}
        }
        .class-container{
            display: flex;
            flex-direction: column;
            .class-item{
                display: flex;
                flex-direction: row;
                font-size: 14px;
                color: #333333;
                /*height: .5rem;*/
                padding: .14rem 0;
                border-bottom: 1px solid #DEDEDE;
                align-items:center
            }
            .class-inf{
                color: #333333;
                display: flex;
                flex-direction: row;
                align-items: center;
                .class-num{
                    /*width: 15%;*/
                    display: flex;
                    align-items: center;
                }
                .class-name{
                    /*width: 67.2%;*/
                    width: 2.5rem;
                    line-height: 18px;
                    padding-left: .2rem;
                    font-size: 14px;
                    color: #333333;

                    word-break: break-all;
                    text-overflow: ellipsis;
                    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
                    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
                    -webkit-line-clamp: 2; /** 显示的行数 **/
                    overflow: hidden;  /** 隐藏超出的内容 **/
                }
            }
        }
    }

    /* 底部 */
    .footer{
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        display: flex;
        flex-direction: row;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 300;
        font-size: 18px;
        color: #888888;
        text-align: center;
        background-color: #fff;
        div{
            border-top:1px solid #f0f0f0;
            border-right:1px solid #f0f0f0;
        }
        img{
            vertical-align: middle;
            margin-top: -3px;
            padding-right: 5px;
        }
        .back{
            flex:1;
            .iBack{
                display: inline-block;
                width: 23px;
                height: 23px;
            }
        }
        .advisory{
            flex:1;
            .iAdvisory{
                display: inline-block;
                width: 23px;
                height: 23px;
            }
        }
        .buy{
            flex:1;
            background: #EF4D1B;
            color: #fff;
            border-color: #EF4D1B;
        }
    }

    /* 推广课程 */
    .share-container{
        width: 100%;
        min-height: 100%;
        position: fixed;
        z-index: 350;
        left: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .50);
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items: center;
        /*display: none;*/
        h2{
            font-size: 16px;
            color: #FFFFFF;
            line-height: 16px;
            margin: .3rem 0 .2rem;
        }
        .share-info{
            width: 3rem;
            height: 4.68rem;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            /*justify-content: center;*/
            align-items: center;
            position: relative;
            .share-img{
                width: 3rem;
                height: 2.02rem;
            }
            .photo{
                width: .4rem;
                height: .4rem;
                border-radius: 50%;
                border: 1px solid #fff;
                margin-top: -.2rem;
                margin-bottom: .1rem;
            }
            .name{
                font-size: 16px;
                color: #333333;
                line-height: 16px;
                margin-bottom: .15rem;
            }
            .class-study{
                font-size: 14px;
                color: #333333;
                text-align: center;
                line-height: 14px;
                width: 100%;
                border-bottom: 1px solid #eeeeee;
                padding-bottom: .2rem;
                span{
                    color: #ee6723;
                }
            }
            .weixin-code{
                width: 1rem;
                height: 1rem;
                background-color: #ee6723;
                margin: .18rem 0;
                img{
                    width: 100%;
                }
            }
            .code-tip{
                font-size: 14px;
                color: #888888;
                text-align: center;
                line-height: 14px;
            }
            .close-share{
                display: inline-block;
                width: .24rem;
                height: .4rem;
                position: absolute;
                /*background-color: pink;*/
                left: 50%;
                margin-left: -.12rem;
                bottom: -.4rem;
                background: url("../assets/images/close-share.png") no-repeat;
                background-size: .24rem .4rem;
            }
        }
    }
</style>
