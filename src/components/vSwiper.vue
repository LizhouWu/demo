<template>
    <div>
        <swiper :list="lunbotuList" auto
                style="width:100%;margin:0 auto;"
                :height= "swiperHeight"
                dots-class="custom-bottom"
                dots-position="center">
        </swiper>
    </div>
</template>

<script>
    import { Swiper } from 'vux'

    export default {
        components: {
            Swiper,
        },
        data () {
            return {
                swiperItemIndex: 1,
            }
        },
        props: ["lunbotuList","swiperHeight"]
    }
</script>

<style scoped>
    .copyright {
        font-size: 12px;
        color: #ccc;
        text-align: center;
    }
    .text-scroll {
        border: 1px solid #ddd;
        border-left: none;
        border-right: none;
    }
    .text-scroll p{
        font-size: 12px;
        text-align: center;
        line-height: 30px;
    }
    .black {
        background-color: #000;
    }
    .title{
        line-height: 100px;
        text-align: center;
        color: #fff;
    }
    .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    .vux-indicator.custom-bottom {
        bottom: 30px;
    }
    @-webkit-keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    }
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    }
    .fadeInUp {
        animation-name: fadeInUp;
    }
    .swiper-demo-img img {
        width: 100%;
    }
</style>