<template>
    <div class="top-bar">
        <div class="left">
            <span class="iconfont icon-live"></span>
        </div>
        <div class="middle">
            <div class="item" @click="changeTop(0)"><span :class="topIndex==0?'active':''">同城</span></div>
            <div class="item" @click="changeTop(1)"><span :class="topIndex==1?'active':''">关注</span></div>
            <div class="item" @click="changeTop(2)"><span :class="topIndex==2?'active':''">推荐</span></div>
        </div>
        <div class="right">
            <span class="iconfont icon-sousuo"></span>
        </div>
    </div>
</template>
<script>
export default {
    name:'TopBar',
    data(){
        return{
            topIndex:2
        }
    },
    methods:{
        changeTop(index){
            this.topIndex=index
            console.log(this.topIndex)
        }
    }
}
</script>
<style scoped>
    .top-bar{
        position: fixed;
        width: 100%;
        height: 60px;
        font-size: 18px;
        color: #cccccc;
        padding: 20px;
        display: flex;
        box-sizing: border-box;
        z-index: 999;
    }
    .left,.right{
        width: 20%;
    }
    .iconfont{
        font-size: 24px;
    }
    .middle{
        width: 60%;
        display: flex;
        justify-items: center;
    }
    .middle .item{
        flex: 1;
        text-align: center;
    }
    .middle .item .span{
        padding: 10px 0;
    }
    .middle .item .active{
        color: #ffffff;
        border-bottom: 3px solid #ffffff;
    }
    .right{
        text-align: right;
    }
</style>