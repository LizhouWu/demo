<template>
    <div class="cardClass-container">
        <!--<card>-->
            <!--<p slot="content" class="card-padding" v-text="msg">标题</p>-->
            <!--<span>更多</span>-->
        <!--</card>-->
        <grid :cols="2" :show-lr-borders="false" class="course">
            <grid-item v-for="i in 4" :key="i">
                <div class="grid-center">
                    <img src="../assets/images/1.png" alt="" >
                    <div class="name">奇迹30 成都场</div>
                    <div class="info">
                        <span class="price">￥360.00</span>
                        <span class="time">2018-02-03</span>
                    </div>
                </div>
            </grid-item>
        </grid>
    </div>
</template>

<script>
    import { Grid, GridItem,Card } from 'vux'
    export default {
        components: {
            Grid,
            GridItem,
            Card
        },
        data() {
            return {
                flag:true
            }
        },
        props:[
            "title",
            "msg",
        ]
    }
</script>

<style scoped>
    /*.cardClass-container{*/
        /*.grid-center{*/
            /*img{*/
                /*width: 1.6rem;*/
            /*}*/
        /*}*/
    /*}*/
    .cardClass-container img{
        width: 1.6rem;
    }
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

    .grid-center {
        display: block;
        text-align: center;
        color: #666;
    }
    .weui-grids {
        background-color: #fff;
    }
    .weui-grid {
        padding: 15px 10px;
    }
</style>
