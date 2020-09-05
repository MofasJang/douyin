<template>
    <div class="video-list">
        <swiper :options="swiperOption">
            <swiper-slide>slide1</swiper-slide>
            <swiper-slide>slide2</swiper-slide>
            <swiper-slide>slide3</swiper-slide>
            <swiper-slide>slide4</swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:"VideoList",    
    data(){
        return {
            swiperOption: {
                direction:"vertical",
                grabCursor: true, 
                setWrapperSize: true, 
                autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
                slidesPerView: 1,
                mousewheel: true, 
                mousewheelControl: true, 
                height: window.innerHeight, // 高度设置，占满设备高度
                resistanceRatio: 0, 
                observeParents: true, 
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    },
}
</script>
<style scoped>
    .video-list{
        height: 100%;
    }
</style>